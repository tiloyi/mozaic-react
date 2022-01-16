import React, { FC } from 'react';
import { ITableCellProps } from '../Table.types';

const TableCell: FC<ITableCellProps> = ({ children }) => {
    return <td>{children}</td>;
};

export default TableCell;
