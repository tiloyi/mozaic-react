import { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { TTableSortDirection } from '../Table';

export type TDataTableColumnVariant = 'number' | 'field';

export interface IDataTableColumn<R> {
    key: keyof R;
    label: string;
    variant?: TDataTableColumnVariant;
    render?: (row: R, key: keyof R) => JSX.Element | string | number;
    isSortable?: boolean;
    sortDirection?: string;
    onSort?: (sortDirection: TTableSortDirection) => void;
}

export interface IDataTableProps<R> {
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => string | number;
    render?: (row: R, key: string | number) => ReactNode;
}

export interface IDataTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    variant?: TDataTableColumnVariant;
}

export interface IDataTableHeaderRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface IDataTableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}
