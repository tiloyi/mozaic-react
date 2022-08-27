import { ReactNode } from 'react';
import { ITableCellProps, ITableRowProps, TTableCellVariant, TTableSortDirection } from '../Table';

export type TDataTableRowKey = string | number;

export type TDataTableRowSelector<R> = (row: R, key: TDataTableRowKey) => boolean;

export type TDataTableRowRenderer<R> = (row: R, key: TDataTableRowKey) => ReactNode;

export type TDataTableRowClickHandler<R> = (row: R) => void;

export type TDataTableRowExpandHandler<R> = (row: R, isExpanded: boolean) => void;

export interface IDataTableColumn<R> extends ITableCellProps {
    key?: keyof R;
    label?: string;
    variant?: TTableCellVariant;
    isSortable?: boolean;
    sortDirection?: TTableSortDirection;
    onSort?: (sortDirection: TTableSortDirection) => void;
    render?: (row: R) => ReactNode;
    renderLabel?: () => ReactNode;
}

export interface IDataTableProps<R> {
    className?: string;
    tableClassName?: string;
    children?: ReactNode;
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    hasExpandableRows?: boolean;
    getRowKey: (row: R) => TDataTableRowKey;
    getRowClassName?: (row: R, key: TDataTableRowKey) => string | undefined;
    renderCustomRow?: TDataTableRowRenderer<R>;
    selectCustomRow?: TDataTableRowSelector<R>;
    expandableRowRenderer?: TDataTableRowRenderer<R>;
    expandableRowSelector?: TDataTableRowSelector<R>;
    onRowClick?: TDataTableRowClickHandler<R>;
    onRowExpand?: TDataTableRowExpandHandler<R>;
}

export interface IDataTableRowProps<R> extends Omit<ITableRowProps, 'onClick'> {
    row: R;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => TDataTableRowKey;
    onClick?: TDataTableRowClickHandler<R>;
    onExpand?: TDataTableRowExpandHandler<R>;
}
