import { ReactNode } from 'react';
import { TTableCellVariant, TTableSortDirection } from '../Table';

export interface IDataTableColumn<R> {
    key: keyof R;
    label: string;
    variant?: TTableCellVariant;
    isSortable?: boolean;
    sortDirection?: TTableSortDirection;
    onSort?: (sortDirection: TTableSortDirection) => void;
    cellRenderer?: (row: R, key: keyof R) => ReactNode;
    headerCellRenderer?: () => ReactNode;
}

export interface IDataTableProps<R> {
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => string | number;
    rowRenderer?: (row: R, key: string | number) => ReactNode;
    rowRendererSelector?: (row: R, key: string | number) => boolean;
}
