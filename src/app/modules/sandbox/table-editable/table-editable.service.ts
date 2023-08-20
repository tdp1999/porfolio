import { Injectable } from '@angular/core';
import { TableEditableModule } from './table-editable.module';
import { ITableEditableData } from 'src/app/shared/interfaces/table-editable.interface';

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
}
