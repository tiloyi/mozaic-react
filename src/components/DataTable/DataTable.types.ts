import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export interface IDataTableProps {
    className?: string;
}

export interface IDataTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

export interface IDataTableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface IDataTableHeaderRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface IDataTableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}
