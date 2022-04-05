import { TdHTMLAttributes, ReactNode } from 'react';

export interface IDataTableFixture {
    id: number;
    name: string;
    count: number;
    date: Date;
    status: 'success' | 'failure';
}

export type TDataTableColumnVariant = 'number' | 'field';

export interface IDataTableColumn<R> {
    key: keyof R;
    label: string;
    variant?: TDataTableColumnVariant;
    rowCellRender?: (rowCell: R, key: keyof R) => JSX.Element | string | number;
    columnCellRender?: () => JSX.Element | string | number;
}

export interface IDataTableProps<R> {
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => string | number;
    customRowRender?: (row: R, key: string | number) => ReactNode;
    isRowСustomRender?: (row: R) => boolean;
}

export interface IDataTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    variant?: TDataTableColumnVariant;
}

export type TTableCellVariant = 'number' | 'field' | 'checkbox' | 'button';

export interface ITableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    className?: string;
    variant?: TTableCellVariant;
    key?: string;
}
