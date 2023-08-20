import { Injectable } from '@angular/core';
import { TableEditableModule } from './table-editable.module';
import {
    ITableEditableColumn,
    ITableEditableData,
} from 'src/app/shared/interfaces/table-editable.interface';

@Injectable()
export class TableEditableService {
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

    parseClipboardData(clipboardData: string): string[] | string[][] {
        // if no tabs, then it's just a single cell
        if (clipboardData.indexOf('\t') === -1) {
            return [clipboardData];
        }

        // if no new lines, then it's just a single row
        if (clipboardData.indexOf('\n') === -1) {
            const rows = clipboardData
                .split('\t')
                .map((c: any) => c.trim())
                .filter((c: any) => c.length > 0);
            return rows;
        }

        // otherwise, split into rows and columns
        const rows = clipboardData
            .split('\n') // Split new lines
            .map((r: any) => r.split('\t')) // Split tabs
            .map((r: any) => r.map((c: any) => c.trim())) // Remove whitespace
            .filter((r: any) => r.length > 0); // Remove empty rows

        return rows;
    }

    private findColumnRange(
        columnId: keyof ITableEditableData,
        columnList: ITableEditableColumn[]
    ) {
        const firstColumn = columnList.findIndex((c) => c.id === columnId);
        const lastColumn =
            firstColumn +
            (Array.isArray(columnList[firstColumn].id)
                ? 1
                : columnList[firstColumn].id.length);
        return [firstColumn, lastColumn];
    }
}
