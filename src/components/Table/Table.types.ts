import { ButtonHTMLAttributes, HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export type TTableSortDirection = 'asc' | 'desc';

export type TTableCellVariant = 'number' | 'field' | 'checkbox' | 'button';

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
    className?: string;
}

export interface ITableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    className?: string;
    variant?: TTableCellVariant;
    key?: string;
}

export interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    className?: string;
}

export interface ITableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
    className?: string;
    variant?: TTableCellVariant;
    isSortable?: boolean;
    sortDirection?: TTableSortDirection;
    onSort?: (sortDirection: TTableSortDirection) => void;
}

export interface ITableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
}

export interface ITableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
}

export interface ITableActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
