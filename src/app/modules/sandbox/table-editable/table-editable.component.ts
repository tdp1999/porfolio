import { SelectionModel } from '@angular/cdk/collections';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
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
    map,
    take,
    takeUntil,
    tap,
} from 'rxjs';
import { TableEditableData } from 'src/app/shared/data/table-editable.data';
import { ITableEditableData } from 'src/app/shared/interfaces/table-editable.interface';

@Component({
    selector: 'app-table-editable',
    templateUrl: './table-editable.component.html',
    styleUrls: ['./table-editable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEditableComponent implements OnInit, OnDestroy {
    items = TableEditableData;
    columns: {
        id: keyof ITableEditableData;
        label: string;
    }[] = [
        {
            id: 'code',
            label: 'Code',
        },
        {
            id: 'name',
            label: 'Name',
        },
        {
            id: 'invoiceNo',
            label: 'Invoice No',
        },
        {
            id: 'invoiceDate',
            label: 'Invoice Date',
        },
        {
            id: 'creditTerm',
            label: 'Credit Term',
        },
        {
            id: 'gst',
            label: 'GST',
        },
        {
            id: 'gstAmount',
            label: 'GST Amount',
        },
        {
            id: 'itemNo',
            label: 'Item No',
        },
        {
            id: 'itemCode',
            label: 'Item Code',
        },
        {
            id: 'itemDescription',
            label: 'Item Description',
        },
        {
            id: 'itemAmount',
            label: 'Item Amount',
        },
        {
            id: 'creditAccount',
            label: 'Credit Account',
        },
        {
            id: 'debitAccount',
            label: 'Debit Account',
        },
        {
            id: 'profitCenter',
            label: 'Profit Center',
        },
        {
            id: 'costCenter',
            label: 'Cost Center',
        },
        {
            id: 'currency',
            label: 'Currency',
        },
        {
            id: 'currencyRate',
            label: 'Currency Rate',
        },
        {
            id: 'reference',
            label: 'Reference',
        },
        {
            id: 'remarks',
            label: 'Remarks',
        },
    ];
    displayedColumns = ['sn', ...this.columns.map((c) => c.id)];
    selection = new SelectionModel<ITableEditableData>(true, []);

    public changeContent$$ = new Subject<{
        target: any | null;
        rowIndex: number;
        column: keyof ITableEditableData;
    }>();

    private _destroy$$ = new Subject<void>();

    private _cdr = inject(ChangeDetectorRef);
    @ViewChild(MatTable, { static: true }) table!: MatTable<ITableEditableData>;

    ngOnInit(): void {
        if (this.items.length < 50) {
            const emptyRows = Array(50 - this.items.length)
                .fill(0)
                .map(() => this.createEmptyRow());
            this.items.push(...emptyRows);
        }
        this.items = this.indexingData(this.items);
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

    ngOnDestroy(): void {
        this._destroy$$.next();
        this._destroy$$.complete();
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
}
