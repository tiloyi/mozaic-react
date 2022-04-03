import React from 'react';
import Table, { TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '../Table';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';

export default function DataTable<R>({ columns, rows, getRowKey }: IDataTableProps<R>): JSX.Element {
    return (
        <Table className="mc-datatable__table">
            <TableHeader>
                <TableRow>
                    {columns.map(column => {
                        const { label, key, isSortable } = column;
                        return (
                            <TableHeaderCell key={`header-cell-${key as string}`} isSortable={isSortable}>
                                {label}
                            </TableHeaderCell>
                        );
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    const rowKey = getRowKey(row);
                    return (
                        <TableRow key={`row-${rowKey}`}>
                            {columns.map(column => (
                                <TableCell key={`row-${rowKey}-cell-${column.key as string}`} variant={column.variant}>
                                    {column.render ? column.render(row, column.key) : row[column.key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
