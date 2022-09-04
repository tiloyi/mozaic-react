import React, { FC } from 'react';
import { ITableBodyProps } from '../Table.types';

const TableBody: FC<ITableBodyProps> = ({ children, ...props }) => <tbody {...props}>{children}</tbody>;

export default TableBody;
