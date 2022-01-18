import React, { FC } from 'react';
import { ITableRowProps } from '../Table.types';

const TableRow: FC<ITableRowProps> = ({ children, ...props }) => <tr {...props}>{children}</tr>;

export default TableRow;
