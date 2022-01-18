import React, { FC } from 'react';
import cn from 'classnames';
import { ITableCellProps } from '../Table.types';

const TableCell: FC<ITableCellProps> = ({ className, children, variant, ...props }) => (
    <td {...props} className={cn(className, variant && `mc-datatable__cell-${variant}`)}>
        {children}
    </td>
);

export default TableCell;
