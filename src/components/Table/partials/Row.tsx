import React, { FC } from 'react';
import { ITableRowProps } from '../Table.types';

const TableRow: FC<ITableRowProps> = ({ className, children, ...props }) => (
    <tr {...props} className={className}>
        {children}
    </tr>
);

export default TableRow;
