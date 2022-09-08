import { HTMLAttributes, ReactNode } from 'react';
import { ITableCellProps, ITableRowProps, TTableCellVariant, TTableSortDirection } from '../Table';
import { IFlexProps } from '../Flex';

export type TDataTableRowKey = string | number;

export type TDataTableRowSelector<R> = (row: R, key: TDataTableRowKey) => boolean;

export type TDataTableRowRenderer<R> = (row: R, key: TDataTableRowKey) => ReactNode;

export type TDataTableRowClickHandler<R> = (row: R) => void;

export interface IDataTableColumn<R> extends ITableCellProps {
    key?: keyof R;
    label?: string;
    variant?: TTableCellVariant;
    isSortable?: boolean;
    sortDirection?: TTableSortDirection;
    onSort?: (sortDirection: TTableSortDirection) => void;
    render?: (row: R) => ReactNode;
    renderLabel?: (rows: Array<R>) => ReactNode;
}

export interface IDataTableProps<R> {
    className?: string;
    tableClassName?: string;
    children?: ReactNode;
    rows: Array<R>;
    columns: Array<IDataTableColumn<R>>;
    isHeaderHidden?: boolean;
    isPending?: boolean;
    withStickyHeader?: boolean;
    getRowKey: (row: R) => TDataTableRowKey;
    getRowClassName?: (row: R, key: TDataTableRowKey) => string | undefined;
    renderCustomRow?: TDataTableRowRenderer<R>;
    selectCustomRow?: TDataTableRowSelector<R>;
    onRowClick?: TDataTableRowClickHandler<R>;
    isSubtable?: boolean;
}

export interface IDataTableRowProps<R> extends Omit<ITableRowProps, 'onClick'> {
    row: R;
    columns: Array<IDataTableColumn<R>>;
    getRowKey: (row: R) => TDataTableRowKey;
    onClick?: TDataTableRowClickHandler<R>;
}

export interface IExpandableDataTableRowProps<R> extends IDataTableRowProps<R> {
    children?: ReactNode;
    isExpanded: boolean;
}

export interface IDataTableFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export interface IDataTableEmptyViewProps extends IFlexProps {}
