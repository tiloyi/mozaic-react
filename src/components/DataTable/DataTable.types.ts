import { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export type TDataTableColumnVariant = 'number' | 'field';

export interface IDataTableColumn<R> {
    key: keyof R;
    label: string;
    variant?: TDataTableColumnVariant;
    render?: (row: R, key: keyof R) => JSX.Element | string | number;
}

export interface IDataTableProps<R> {
    className?: string;
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => string | number;

    render?: (row: R, key: string | number) => ReactNode;
    isRowRender?: (row: R) => boolean;
}

export interface IDataTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    variant?: TDataTableColumnVariant;
}

export interface IDataTableHeaderRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface IDataTableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}
