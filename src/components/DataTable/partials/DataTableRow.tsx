import React from 'react';
import { TableCell, TableRow } from '../../Table';
import { IDataTableRowProps } from '../DataTable.types';

function DataTableRow<R>({ columns, row, getRowKey, ...props }: IDataTableRowProps<R>): JSX.Element {
    const rowKey = getRowKey(row);

    return (
        <TableRow {...props}>
            {columns.map(column => (
                <TableCell key={`row-${rowKey}-column-${column.key as string}`} variant={column.variant}>
                    {column.cellRenderer ? column.cellRenderer(row, column.key) : row[column.key]}
                </TableCell>
            ))}
        </TableRow>
    );
}

export default DataTableRow;
