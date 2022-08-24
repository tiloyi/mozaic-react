import React from 'react';
import Table, { TableBody, TableHeader, TableRow, TableHeaderCell } from '../Table';
import { DataTableRow } from './partials';
import { IDataTableProps } from './DataTable.types';

const defaultRowRendererSelector = (): boolean => false;

function DataTable<R>({
    columns,
    rows,
    getRowKey,
    rowRenderer,
    rowRendererSelector = defaultRowRendererSelector,
    onRowClick
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
                        <DataTableRow<R>
                            key={rowKey}
                            getRowKey={getRowKey}
                            row={row}
                            columns={columns}
                            onClick={onRowClick}
                        />
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default DataTable;
