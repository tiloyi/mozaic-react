import React, { FC } from 'react';
import cn from 'classnames';
import { ITableCellProps } from '../Table.types';

const TableCell: FC<ITableCellProps> = ({ children, variant, ...props }) => (
    <td {...props} className={cn(variant && `mc-datatable__cell-${variant}`)}>
        {children}
    </td>
);

export default TableCell;
