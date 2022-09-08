import React from 'react';
import DataTableRow from './Row';
import { IExpandableDataTableRowProps } from '../DataTable.types';
import { TableCell, TableRow } from '../../Table';
import cn from 'classnames';

function ExpandableDataTableRow<R>({
    isExpanded,
    columns,
    children,
    offset,
    ...props
}: IExpandableDataTableRowProps<R>): JSX.Element {
    const offsetClass = offset ? `mc-datatable__row-expandable--offset-${offset}` : undefined;

    return (
        <>
            <DataTableRow<R> {...props} columns={columns} />
            {isExpanded && (
                <TableRow className={cn('mc-datatable__row-expandable', offsetClass)}>
                    <TableCell colSpan={columns.length}>{children}</TableCell>
                </TableRow>
            )}
        </>
    );
}

export default ExpandableDataTableRow;
