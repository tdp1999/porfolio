import { SelectionModel } from '@angular/cdk/collections';
import { DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    NgZone,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import {
    Subject,
    debounceTime,
    distinctUntilChanged,
    filter,
    fromEvent,
    map,
    take,
    takeUntil,
    tap,
} from 'rxjs';
import {
    TableColumns,
    TableEditableData,
} from 'src/app/shared/data/table-editable.data';
import { ITableEditableData } from 'src/app/shared/interfaces/table-editable.interface';

@Component({
    selector: 'app-table-editable',
    templateUrl: './table-editable.component.html',
    styleUrls: ['./table-editable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEditableComponent implements OnInit, OnDestroy {
    @ViewChild(MatTable, { static: true }) table!: MatTable<ITableEditableData>;

    public columns = TableColumns;
    public items = TableEditableData;
    public displayedColumns = ['sn', ...this.columns.map((c) => c.id)];
    public changeContent$$ = new Subject<{
        target: any | null;
        rowIndex: number;
        column: keyof ITableEditableData;
    }>();

    private _isMouseDown = false;
    private _startRow = -1;
    private _startCol = -1;
    private _endRow = -1;
    private _endCol = -1;

    private _destroy$$ = new Subject<void>();
    private _document = inject(DOCUMENT);

    ngOnInit(): void {
        this.setupTable();
        this.listenToChangeContent();
        this.setupMouseListener();
        this.setupKeydownListener();
    }

    ngOnDestroy(): void {
        this._destroy$$.next();
        this._destroy$$.complete();
    }

    setupTable() {
        if (this.items.length < 50) {
            const emptyRows = Array(50 - this.items.length)
                .fill(0)
                .map(() => this.createEmptyRow());
            this.items.push(...emptyRows);
        }
        this.items = this.indexingData(this.items);
    }

    setupMouseListener() {
        const table = this._document.querySelector('table');
        if (!table) return;
        fromEvent<MouseEvent>(table, 'mousedown')
            .pipe(
                filter((d) => !this._isMouseDown),
                takeUntil(this._destroy$$)
            )
            .subscribe((event) => {
                this.onMouseDownHandler(event);
            });

        fromEvent<MouseEvent>(table, 'mouseup')
            .pipe(
                filter(() => this._isMouseDown),
                takeUntil(this._destroy$$)
            )
            .subscribe(() => {
                this.onMouseUpHandler();
            });

        fromEvent<MouseEvent>(table, 'mouseenter')
            .pipe(
                filter(() => this._isMouseDown),
                takeUntil(this._destroy$$)
            )
            .subscribe((event) => {
                this.onMouseEnterHandler(event);
            });
    }

    setupKeydownListener() {
        fromEvent<KeyboardEvent>(document, 'keydown')
            .pipe(
                debounceTime(300),
                // filter(() => this._isMouseDown),
                filter(
                    (event) =>
                        event.key === 'Delete' || event.key === 'Backspace'
                ),
                takeUntil(this._destroy$$)
            )
            .subscribe(() => {
                this.deleteSelectedCells();
            });
    }

    listenToChangeContent() {
        this.changeContent$$
            .pipe(
                debounceTime(500),
                map((d) => {
                    return {
                        text: d.target?.innerText,
                        rowIndex: d.rowIndex,
                        column: d.column,
                    };
                }),
                distinctUntilChanged((a, b) => {
                    return (
                        a.text === b.text &&
                        a.rowIndex === b.rowIndex &&
                        a.column === b.column
                    );
                }),
                takeUntil(this._destroy$$)
            )
            .subscribe((d) => {
                const originalData = this.items[d.rowIndex];
                const newData = {
                    ...originalData,
                    [d.column]: d.text,
                    empty: 'false',
                };

                this.items[d.rowIndex] = newData;
            });
    }

    createEmptyRow(): ITableEditableData {
        return {
            empty: 'true',
            code: '',
            name: '',
            invoiceNo: '',
            invoiceDate: '',
            creditTerm: '',
            gst: '',
            gstAmount: '',
            itemNo: '',
            itemCode: '',
            itemDescription: '',
            itemAmount: '',
            creditAccount: '',
            debitAccount: '',
            profitCenter: '',
            costCenter: '',
            currency: '',
            currencyRate: '',
            reference: '',
            remarks: '',
        };
    }

    indexingData(data: ITableEditableData[]) {
        return data.map((d, i) => ({ ...d, index: (i + 1).toString() }));
    }

    onPaste(event: any, index: number, column: keyof ITableEditableData) {
        event.preventDefault();
        const clipboardData: string = event.clipboardData.getData('text/plain');

        if (!clipboardData) return;

        let rows = [];
        if (
            clipboardData.indexOf('\t') === -1 ||
            clipboardData.indexOf('\n') === -1
        ) {
            rows = [clipboardData];
        } else {
            rows = clipboardData
                .split('\n') // split new lines
                .map((r: any) => r.split('\t')) // split tabs
                .map((r: any) => r.map((c: any) => c.trim())) // remove whitespace
                .filter((r: any) => r.length > 1); // remove empty rows
        }

        if (rows.length < 1) return;

        const firstColumn = this.columns.findIndex((c) => c.id === column);
        const lastColumn =
            firstColumn + (typeof rows[0] === 'string' ? 1 : rows[0].length);
        const changingColumns = this.columns.slice(firstColumn, lastColumn);

        const itemsToBeAdded = rows.map((r: string[]) => {
            const originalItem = this.items[index];
            const item = { ...originalItem };
            changingColumns.forEach((c, j) => {
                item[c.id] = typeof r === 'string' ? r : r[j];
            });
            item.empty = 'false';
            return item;
        });

        this.items.splice(index, rows.length, ...itemsToBeAdded);
        this.table.renderRows();
    }

    submit() {
        const filteredItems = this.items.filter((i) => i.empty === 'false');
        console.log(filteredItems);
    }

    onMouseDown(row: number, col: number) {
        if (this._isMouseDown) return;
        this._isMouseDown = true;
        this._startRow = row;
        this._startCol = col;
        this._endRow = row;
        this._endCol = col;
    }

    onMouseDownHandler(event: MouseEvent) {
        event.preventDefault();
        const cell = event.target as HTMLTableCellElement;
        if (!cell) return;

        const row = (cell.parentElement as HTMLTableRowElement)?.rowIndex ?? -1;
        const col = cell.cellIndex;

        this.onMouseDown(row, col);
    }

    onMouseEnter(row: number, col: number) {
        if (!this._isMouseDown) return;
        this._endRow = row;
        this._endCol = col;
    }

    onMouseEnterHandler(event: MouseEvent) {
        const cell = event.target as HTMLTableCellElement;
        if (!cell) return;

        const row = (cell.parentElement as HTMLTableRowElement)?.rowIndex ?? -1;
        const col = cell.cellIndex;

        this.onMouseEnter(row, col);
    }

    onMouseUp() {
        this._isMouseDown = false;
    }

    onMouseUpHandler() {
        this.onMouseUp();
    }

    isCellSelected(row: number, col: number): boolean {
        if (!this._isMouseDown) return false;

        const minRow = Math.min(this._startRow, this._endRow);
        const maxRow = Math.max(this._startRow, this._endRow);
        const minCol = Math.min(this._startCol, this._endCol);
        const maxCol = Math.max(this._startCol, this._endCol);

        return row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;
    }

    deleteSelectedCells() {
        // if (!this._isMouseDown) return;

        const minRow = Math.min(this._startRow, this._endRow);
        const maxRow = Math.max(this._startRow, this._endRow);
        const minCol = Math.min(this._startCol, this._endCol);
        const maxCol = Math.max(this._startCol, this._endCol);

        const selectedColumns = this.columns.slice(minCol, maxCol + 1);
        const selectedRows = this.items.slice(minRow, maxRow + 1);

        selectedRows.forEach((r) => {
            selectedColumns.forEach((c) => {
                r[c.id] = '';
            });

            if (selectedColumns.length === this.columns.length) {
                r.empty = 'true';
            }
        });

        this.items.splice(minRow, maxRow - minRow + 1, ...selectedRows);
    }
}
