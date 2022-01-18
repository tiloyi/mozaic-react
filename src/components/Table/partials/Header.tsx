import React, { FC } from 'react';
import { ITableHeaderProps } from '../Table.types';

const TableHeader: FC<ITableHeaderProps> = ({ className, children, ...props }) => (
    <thead {...props} className={className}>
        {children}
    </thead>
);

export default TableHeader;
