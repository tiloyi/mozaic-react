import { ReactNode } from 'react';
import { ITableCellProps, ITableRowProps, TTableCellVariant, TTableSortDirection } from '../Table';

export type TDataTableRowKey = string | number;

export interface IDataTableColumn<R> extends ITableCellProps {
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
    getRowClassName?: (row: R, key: TDataTableRowKey) => string | undefined;
    rowRenderer?: (row: R, key: TDataTableRowKey) => ReactNode;
    rowRendererSelector?: (row: R, key: TDataTableRowKey) => boolean;
    onRowClick?: (row: R) => void;
}

export interface IDataTableRowProps<R> extends Omit<ITableRowProps, 'onClick'> {
    columns: Array<IDataTableColumn<R>>;
    row: R;
    getRowKey: (row: R) => TDataTableRowKey;
    onClick?: (row: R) => void;
}

export interface IDataTableContextProps {
    children?: ReactNode;
}
