export type TTableColumnVariant = 'number' | 'field' | 'checkbox' | 'button';

export interface ITableProps {
    className?: string;
}

export interface ITableCellProps {
    className?: string;
    variant?: TTableColumnVariant;
}

export interface ITableRowProps {
    className?: string;
}

export interface ITableHeaderCellProps {
    className?: string;
    variant?: TTableColumnVariant;
}

export interface ITableHeaderLabelProps {
    className?: string;
}

export interface ITableHeaderProps {
    className?: string;
}

export interface ITableBodyProps {
    className?: string;
}
