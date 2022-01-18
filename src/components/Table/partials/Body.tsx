import React, { FC } from 'react';
import { ITableBodyProps } from '../Table.types';

const TableBody: FC<ITableBodyProps> = ({ className, children, ...props }) => (
    <tbody {...props} className={className}>
        {children}
    </tbody>
);

export default TableBody;
