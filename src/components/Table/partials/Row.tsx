import React, { FC } from 'react';
import cn from 'classnames';
import { ITableRowProps } from '../Table.types';

const TableRow: FC<ITableRowProps> = ({ className, children, isSelected, ...props }) => (
    <tr className={cn(className, { selected: isSelected })} {...props}>
        {children}
    </tr>
);

export default TableRow;
