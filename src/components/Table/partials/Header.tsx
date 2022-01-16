import React, { FC } from 'react';
import { ITableHeaderProps } from '../Table.types';

const TableHeader: FC<ITableHeaderProps> = ({ children }) => {
    return <thead>{children}</thead>;
};

export default TableHeader;
