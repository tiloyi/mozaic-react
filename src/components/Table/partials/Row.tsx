import React, { FC } from 'react';
import { ITableRowProps } from '../Table.types';

const TableRow: FC<ITableRowProps> = ({ children }) => {
    return <tr>{children}</tr>;
};

export default TableRow;
