import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export interface IDataTableColumn<R> {
    key: keyof R;
    title: string;
    render?: (row: R, key: keyof R) => JSX.Element | string | number;
}

export interface IDataTableProps<R> {
    className?: string;
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => string | number;
}

export interface IDataTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

export interface IDataTableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface IDataTableHeaderRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface IDataTableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}
