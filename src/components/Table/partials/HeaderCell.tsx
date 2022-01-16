import React, { FC } from 'react';
import { ITableHeaderCellProps } from '../Table.types';
import cn from 'classnames';

const TableHeaderCell: FC<ITableHeaderCellProps> = ({ children, variant, ...props }) => {
    return (
        <th {...props} className={cn(variant && `mc-datatable__cell-${variant}`)}>
            {children}
        </th>
    );
};

export default TableHeaderCell;
