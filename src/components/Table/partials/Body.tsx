import React, { FC } from 'react';
import { ITableBodyProps } from '../Table.types';

const TableBody: FC<ITableBodyProps> = ({ children }) => {
    return <tbody>{children}</tbody>;
};

export default TableBody;
