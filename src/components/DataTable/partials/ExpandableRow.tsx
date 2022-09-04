import React from 'react';
import DataTableRow from './Row';
import { IExpandableDataTableRowProps } from '../DataTable.types';
import { TableCell, TableRow } from '../../Table';

function ExpandableDataTableRow<R>({
    isExpanded,
    columns,
    children,
    ...props
}: IExpandableDataTableRowProps<R>): JSX.Element {
    return (
        <>
            <DataTableRow<R> {...props} columns={columns} />
            {isExpanded && (
                <TableRow>
                    <TableCell colSpan={columns.length}>{children}</TableCell>
                </TableRow>
            )}
        </>
    );
}

export default ExpandableDataTableRow;
