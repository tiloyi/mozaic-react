import React from 'react';
import Table, { TableBody, TableCell, TableHeader, TableRow, TableHeaderCell } from '../Table';
import { IDataTableProps } from './DataTable.types';

function DataTable<R>({ columns, rows, getRowKey }: IDataTableProps<R>): JSX.Element {
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

                    return (
                        <TableRow key={`row-${rowKey}`}>
                            {columns.map(column => {
                                return (
                                    <TableCell
                                        key={`row-${rowKey}-column-${column.key as string}`}
                                        variant={column.variant}
                                    >
                                        {column.cellRenderer ? column.cellRenderer(row, column.key) : row[column.key]}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
    //             {rows.map(row => {
    //                 if (isRowСustomRender && !isRowСustomRender(row)) {
    //                     return null;
    //                 }
    //                 const rowKey = getRowKey(row);
    //
    //                 return customRowRender ? (
    //                     customRowRender(row, rowKey)
    //                 ) : (
    //                     <TableRow key={`row-${rowKey}`}>
    //                         {columns.map(column => {
    //                             const { variant, key, rowCellRender } = column;
    //                             return (
    //                                 <TableCell key={`row-${rowKey}-cell-${key as string}`} variant={variant}>
    //                                     {rowCellRender ? rowCellRender(row, key) : row[key]}
    //                                 </TableCell>
    //                             );
    //                         })}
    //                     </TableRow>
    //                 );
    //             })}
}

export default DataTable;
