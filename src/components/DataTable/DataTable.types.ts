import { ReactNode } from 'react';
import { ITableCellProps, ITableRowProps, TTableCellVariant, TTableSortDirection } from '../Table';

export type TDataTableRowKey = string | number;

export type TDataTableRowSelector<R> = (row: R, key: TDataTableRowKey) => boolean;

export type TDataTableRowRenderer<R> = (row: R, key: TDataTableRowKey) => ReactNode;

export type TDataTableRowClickHandler<R> = (row: R) => void;

export type TDataTableRowExpandHandler<R> = (row: R, isExpanded: boolean) => void;

export type TDataTableRowSelectHandler<R> = (row: R, isSelected: boolean) => void;

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

export interface IDataTableContainerProps<R> {
    children?: ReactNode;
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => TDataTableRowKey;
    getRowClassName?: (row: R, key: TDataTableRowKey) => string | undefined;
    customRowRenderer?: TDataTableRowRenderer<R>;
    customRowSelector?: TDataTableRowSelector<R>;
    expandedRowRenderer?: TDataTableRowRenderer<R>;
    expandedRowSelector?: TDataTableRowSelector<R>;
    onRowClick?: TDataTableRowClickHandler<R>;
    onRowExpand?: TDataTableRowExpandHandler<R>;
    onRowSelect?: TDataTableRowSelectHandler<R>;
}

export interface IDataTableProps<R> {
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => TDataTableRowKey;
    getRowClassName?: (row: R, key: TDataTableRowKey) => string | undefined;
    customRowRenderer?: TDataTableRowRenderer<R>;
    customRowSelector?: TDataTableRowSelector<R>;
    expandedRowRenderer?: TDataTableRowRenderer<R>;
    expandedRowSelector?: TDataTableRowSelector<R>;
    onRowClick?: TDataTableRowClickHandler<R>;
    onRowExpand?: TDataTableRowExpandHandler<R>;
    onRowSelect?: TDataTableRowSelectHandler<R>;
}

export interface IDataTableRowProps<R> extends Omit<ITableRowProps, 'onClick' | 'onSelect'> {
    row: R;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => TDataTableRowKey;
    onClick?: TDataTableRowClickHandler<R>;
    onExpand?: TDataTableRowExpandHandler<R>;
    onSelect?: TDataTableRowSelectHandler<R>;
}

export interface IDataTableContextProps {
    children?: ReactNode;
}
