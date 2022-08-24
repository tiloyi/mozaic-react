import React from 'react';
import { TableCell, TableRow } from '../../Table';
import { IDataTableRowProps } from '../DataTable.types';

function DataTableRow<R>({ columns, row, rowKey }: IDataTableRowProps<R>): JSX.Element {
    return (
        <TableRow>
            {columns.map(column => (
                <TableCell key={`row-${rowKey}-column-${column.key as string}`} variant={column.variant}>
                    {column.cellRenderer ? column.cellRenderer(row, column.key) : row[column.key]}
                </TableCell>
            ))}
        </TableRow>
    );
}

export default DataTableRow;
