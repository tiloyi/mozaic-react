import Table from './Table';

export { TableActionButton, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from './partials';
export {
    ITableProps,
    ITableActionButtonProps,
    ITableBodyProps,
    ITableCellProps,
    ITableHeaderProps,
    ITableHeaderCellProps,
    ITableRowProps,
    TTableSortDirection,
    TTableCellVariant,
    ISubTableProps,
    TTableSize
} from './Table.types';
export { default as SubTable } from './SubTable';
export default Table;
