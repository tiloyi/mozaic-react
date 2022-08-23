import React from 'react';
import Table, { TableBody, TableCell, TableHeader, TableRow } from '../Table';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss';
import HeaderCell from '../Table/partials/HeaderCell';

function DataTable<R>({ columns, rows, getRowKey }: IDataTableProps<R>): JSX.Element {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map(column => {
                        return (
                            <HeaderCell key={`column-${column.key as string}`} variant={column.variant}>
                                {column.label}
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
                                return (
                                    <TableCell
                                        key={`row-${rowKey}-column-${column.key as string}`}
                                        variant={column.variant}
                                    >
                                        {row[column.key]}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
    // return (
    //     <Table className="mc-datatable__table">
    //         <TableHeader>
    //             <TableRow>
    //                 {columns.map(column => {
    //                     const { label, key, columnCellRender } = column;
    //                     return (
    //                         <HeaderCell key={`column-${key as string}`}>
    //                             {columnCellRender ? columnCellRender() : label}
    //                         </HeaderCell>
    //                     );
    //                 })}
    //             </TableRow>
    //         </TableHeader>
    //         <TableBody>
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
    //         </TableBody>
    //     </Table>
    // );
}

export default DataTable;
