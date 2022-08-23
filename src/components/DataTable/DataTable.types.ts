import { ReactNode } from 'react';
import { TTableCellVariant } from '../Table';

export interface IDataTableColumn<R> {
    key: keyof R;
    label: string;
    variant?: TTableCellVariant;
    cellRenderer?: (row: R, key: keyof R) => ReactNode;
    headerCellRenderer?: () => ReactNode;
}

export interface IDataTableProps<R> {
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => string | number;
    rowRenderer?: (row: R, key: string | number) => ReactNode;
    // isRowСustomRender?: (row: R) => boolean;
}
