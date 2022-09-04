import React, { useCallback } from 'react';
import { TableCell, TableRow } from '../../Table';
import { IDataTableRowProps } from '../DataTable.types';

function DataTableRow<R>({ columns, row, getRowKey, onClick, ...props }: IDataTableRowProps<R>): JSX.Element {
    const rowKey = getRowKey(row);

    const handleClick = useCallback(() => onClick?.(row), [row, onClick]);

    return (
        <TableRow {...props} onClick={handleClick}>
            {columns.map((column, columnIndex) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { key, render, renderLabel, ...columnProps } = column;

                if (render) {
                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <TableCell key={`row-${rowKey}-column-${columnIndex}`} {...columnProps}>
                            {render(row)}
                        </TableCell>
                    );
                }

                if (key) {
                    return (
                        <TableCell key={`row-${rowKey}-column-${column.key as string}`} {...columnProps}>
                            {row[key]}
                        </TableCell>
                    );
                }

                // eslint-disable-next-line react/no-array-index-key
                return <TableCell key={`row-${rowKey}-column-${columnIndex}`} {...columnProps} />;
            })}
        </TableRow>
    );
}

export default DataTableRow;
