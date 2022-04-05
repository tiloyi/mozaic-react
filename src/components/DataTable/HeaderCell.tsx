import React, { FC } from 'react';
import cn from 'classnames';
import { ITableCellProps } from './DataTable.types';

const HeaderCell: FC<ITableCellProps> = ({ className, children, variant, ...props }) => (
    <th {...props} className={cn(className, variant && `mc-datatable__cell-${variant}`)}>
        {children}
    </th>
);

export default HeaderCell;
