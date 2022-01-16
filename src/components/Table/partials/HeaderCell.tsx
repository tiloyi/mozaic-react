import React, { FC } from 'react';
import { ITableHeaderCellProps } from '../Table.types';

const TableHeaderCell: FC<ITableHeaderCellProps> = ({ children }) => {
    return <th scope="col">{children}</th>;
};

export default TableHeaderCell;
