import React from 'react';
import Table, { TableBody, TableCell, TableHeader, TableRow, TableHeaderCell } from '../Table';
import { IDataTableProps } from './DataTable.types';

const defaultRowRendererSelector = (): boolean => false;

function DataTable<R>({
    columns,
    rows,
    getRowKey,
    rowRenderer,
    rowRendererSelector = defaultRowRendererSelector
}: IDataTableProps<R>): JSX.Element {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map(column => (
                        <TableHeaderCell
                            key={`column-${column.key as string}`}
                            variant={column.variant}
                            isSortable={column.isSortable}
                            sortDirection={column.sortDirection}
                            onSort={column.onSort}
                        >
                            {column.headerCellRenderer ? column.headerCellRenderer() : column.label}
                        </TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    const rowKey = getRowKey(row);

                    if (rowRendererSelector(row, rowKey) && rowRenderer !== undefined) {
                        return rowRenderer(row, rowKey);
                    }

                    return (
                        <TableRow key={`row-${rowKey}`}>
                            {columns.map(column => (
                                <TableCell
                                    key={`row-${rowKey}-column-${column.key as string}`}
                                    variant={column.variant}
                                >
                                    {column.cellRenderer ? column.cellRenderer(row, column.key) : row[column.key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default DataTable;
