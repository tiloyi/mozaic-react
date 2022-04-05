import React from 'react';
import Table, { TableBody, TableCell, TableHeader, TableRow } from '../Table';
import HeaderCell from './HeaderCell';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';

export default function DataTable<R>({ columns, rows, getRowKey }: IDataTableProps<R>): JSX.Element {
    return (
        <Table className="mc-datatable__table">
            <TableHeader>
                <TableRow>
                    {columns.map(column => {
                        const { label, key, columnCellRender } = column;
                        return (
                            <HeaderCell key={`column-${key as string}`}>
                                {columnCellRender ? columnCellRender() : label}
                            </HeaderCell>
                        );
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map(row => {
                    const rowKey = getRowKey(row);
                    return (
                        <TableRow key={`row-${rowKey}`}>
                            {columns.map(column => {
                                const { variant, key, rowCellRender } = column;
                                return (
                                    <TableCell key={`row-${rowKey}-cell-${key as string}`} variant={variant}>
                                        {rowCellRender ? rowCellRender(row, key) : row[key]}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
