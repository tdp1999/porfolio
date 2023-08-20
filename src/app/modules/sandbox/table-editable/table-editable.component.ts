import { DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import {
    BehaviorSubject,
    Subject,
    debounceTime,
    distinctUntilChanged,
    filter,
    fromEvent,
    map,
    of,
    tap,
    withLatestFrom,
} from 'rxjs';
import {
    TableColumns,
    TableEditableData,
} from 'src/app/shared/data/table-editable.data';
import { ITableEditableData } from 'src/app/shared/interfaces/table-editable.interface';
import { TableEditableService } from './table-editable.service';

interface ISelectedCell {
    rowIndex: number;
    column: keyof ITableEditableData;
}

@Component({
    selector: 'app-table-editable',
    templateUrl: './table-editable.component.html',
    styleUrls: ['./table-editable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEditableComponent implements OnDestroy {
    @ViewChild(MatTable, { static: true }) table!: MatTable<ITableEditableData>;

    private _destroy$$ = new Subject<void>();
    private _document = inject(DOCUMENT);
    private _cdr = inject(ChangeDetectorRef);
    private _service = inject(TableEditableService);

    private _startRow: number | null = null;
    private _startCol: number | null = null;
    private _endRow: number | null = null;
    private _endCol: number | null = null;

    public columns = TableColumns;
    public displayedColumns = ['sn', ...this.columns.map((c) => c.id)];
    public source = of(TableEditableData);

    public items$$ = new BehaviorSubject<ITableEditableData[]>(
        TableEditableData
    );
    public items$ = this.items$$.asObservable().pipe(
        map((items) => {
            if (items.length === 50) return items;
            const emptyRows = Array(50 - items.length)
                .fill(0)
                .map(() => this._service.createEmptyRow());
            items.push(...emptyRows);
            return items;
        }),
        map((items) =>
            items.map((d, i) => ({ ...d, index: (i + 1).toString() }))
        )
    );

    public keyInContent$$ = new Subject<{
        target: any | null;
        rowIndex: number;
        column: keyof ITableEditableData;
    }>();
    public keyInContent$ = this.keyInContent$$.asObservable().pipe(
        filter((d) => !!d.target.innerText),
        distinctUntilChanged((a, b) => {
            return (
                a.target.text === b.target.text &&
                a.rowIndex === b.rowIndex &&
                a.column === b.column
            );
        }),
        map((d) => {
            console.log('keyin emit');
            return {
                text: d.target?.innerText,
                rowIndex: d.rowIndex,
                column: d.column,
            };
        }),
        withLatestFrom(this.items$$),
        tap(([d, items]) => {
            const originalData = items[d.rowIndex];
            const newData = {
                ...originalData,
                [d.column]: d.text,
                empty: 'false',
            };

            items[d.rowIndex] = newData;

            this.items$$.next(items);
        })
    );

    public pasteContent$$ = new Subject<{
        event: ClipboardEvent;
        rowIndex: number;
        column: keyof ITableEditableData;
    }>();
    public pasteContent$ = this.pasteContent$$.asObservable().pipe(
        filter((d) => !!d.event.clipboardData?.getData('text/plain')),
        map((d) => {
            d.event.preventDefault();
            const clipboardData = d.event.clipboardData?.getData('text') ?? '';

            // if no tabs or new lines, then it's just a single cell
            if (
                clipboardData.indexOf('\t') === -1 ||
                clipboardData.indexOf('\n') === -1
            ) {
                return {
                    rows: [clipboardData],
                    rowIndex: d.rowIndex,
                    column: d.column,
                };
            }

            // otherwise, split into rows and columns
            const rows = clipboardData
                .split('\n') // split new lines
                .map((r: any) => r.split('\t')) // split tabs
                .map((r: any) => r.map((c: any) => c.trim())) // remove whitespace
                .filter((r: any) => r.length > 1); // remove empty rows

            return {
                rows,
                rowIndex: d.rowIndex,
                column: d.column,
            };
        }),
        filter((d) => d.rows.length > 0),
        withLatestFrom(this.items$$),
        map((d) => {
            const [{ rows, rowIndex, column }, items] = d;
            const firstColumn = this.columns.findIndex((c) => c.id === column);
            const lastColumn =
                firstColumn +
                (typeof rows[0] === 'string' ? 1 : rows[0].length);
            const changingColumns = this.columns.slice(firstColumn, lastColumn);

            const itemsToBeAdded = rows.map((r: string[], i: number) => {
                const originalItem = items[rowIndex + i];
                const item = { ...originalItem };
                changingColumns.forEach((c, j) => {
                    item[c.id] = typeof r === 'string' ? r : r[j];
                });
                item.empty = 'false';
                return item;
            });

            return {
                itemsToBeAdded,
                rowIndex,
                items,
            };
        }),
        tap((d) => {
            const { itemsToBeAdded, rowIndex, items } = d;
            items.splice(rowIndex, itemsToBeAdded.length, ...itemsToBeAdded);
            this.items$$.next(items);
        })
    );

    public isSelecting$$ = new BehaviorSubject<boolean>(false);
    public isSelecting$ = this.isSelecting$$.asObservable();

    public mouseMove$$ = new Subject<{
        rowIndex: number;
        columnIndex: number;
    }>();
    public mouseMove$ = this.mouseMove$$.asObservable().pipe(
        // debounceTime(40),
        withLatestFrom(this.isSelecting$$),
        filter(([_, isSelecting]) => isSelecting),
        map(([d, _]) => d),
        tap((d) => {
            console.log('mouse move');
            this._endRow = d.rowIndex;
            this._endCol = d.columnIndex;
            this._cdr.markForCheck();
        })
    );

    public deleteKey$ = fromEvent<KeyboardEvent>(this._document, 'keyup').pipe(
        filter(
            (event) =>
                this._startCol !== null &&
                this._endCol !== null &&
                this._startRow !== null &&
                this._endRow !== null &&
                (event.key === 'Delete' || event.key === 'Backspace')
        ),
        withLatestFrom(this.items$$),
        map(([_, items]) => items),
        tap((items) => {
            console.log('delete key');
            if (
                !this._startCol ||
                !this._endCol ||
                !this._startRow ||
                !this._endRow
            )
                return;

            const deletingColumns = this.columns.slice(
                this._startCol,
                this._endCol + 1
            );

            const deletingItems = items.slice(this._startRow, this._endRow + 1);

            deletingItems.forEach((item) => {
                deletingColumns.forEach((column) => {
                    item[column.id] = '';
                });

                if (deletingColumns.length === this.columns.length) {
                    item.empty = 'true';
                }
            });

            items.splice(
                this._startRow,
                deletingItems.length,
                ...deletingItems
            );

            this.items$$.next(items);
        })
    );

    public deleteRow$$ = new Subject<number>();

    ngOnDestroy(): void {
        this._destroy$$.next();
        this._destroy$$.complete();
    }

    testPaste(event: any) {
        event.preventDefault();
        console.log(event.clipboardData.getData('text/plain'));
    }

    submit() {
        const filteredItems = this.items$$
            .getValue()
            .filter((i) => i.empty === 'false');
        console.log(filteredItems);
    }

    onMouseDown(row: number, col: number) {
        this.isSelecting$$.next(true);
        this._startRow = row;
        this._startCol = col;
        this._endRow = row;
        this._endCol = col;
    }

    onMouseUp(row: number, col: number) {
        this._endRow = row;
        this._endCol = col;

        console.log(this._startRow, this._startCol, this._endRow, this._endCol);
        this.isSelecting$$.next(false);
        this._cdr.markForCheck();
    }

    isCellSelected(row: number, col: number): boolean {
        // console.log('Calculating cell selection');
        if (this._startRow === null || this._startCol === null) return false;

        const minRow = Math.min(this._startRow, this._endRow ?? row);
        const maxRow = Math.max(this._startRow, this._endRow ?? row);
        const minCol = Math.min(this._startCol, this._endCol ?? col);
        const maxCol = Math.max(this._startCol, this._endCol ?? col);

        return row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;
    }
}
