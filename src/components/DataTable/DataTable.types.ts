import { ReactNode } from 'react';
import { ITableRowProps, TTableCellVariant, TTableSortDirection } from '../Table';

export type TDataTableRowKey = string | number;

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
    getRowKey: (row: R) => TDataTableRowKey;
    rowRenderer?: (row: R, key: TDataTableRowKey) => ReactNode;
    rowRendererSelector?: (row: R, key: TDataTableRowKey) => boolean;
    onRowClick?: () => void;
}

export interface IDataTableRowProps<R> extends ITableRowProps {
    columns: Array<IDataTableColumn<R>>;
    row: R;
    getRowKey: (row: R) => TDataTableRowKey;
}
