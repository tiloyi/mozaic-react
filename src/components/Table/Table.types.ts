import { ButtonHTMLAttributes, HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

export type TTableSortDirection = 'asc' | 'desc' | undefined;

export type TTableCellVariant = 'number' | 'field' | 'checkbox' | 'button';

export const sizes = ['s', 'l', 'm'] as const;

export type TTableSize = typeof sizes[number];

export interface ITableContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: TTableSize;
    withStickyHeader?: boolean;
}

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {}

export interface ISubTableProps extends TableHTMLAttributes<HTMLTableElement> {}

export interface ITableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    variant?: TTableCellVariant;
    withSubTable?: boolean;
}

export interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    isSelected?: boolean;
}

export interface ITableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
    variant?: TTableCellVariant;
    isSortable?: boolean;
    sortDirection?: TTableSortDirection;
    onSort?: (sortDirection: TTableSortDirection) => void;
}

export interface ITableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface ITableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface ITableActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
