import React, { FC } from 'react';
import { IDataTableRowProps } from '../DataTable.types';

const DataTableRow: FC<IDataTableRowProps> = ({ children }) => {
    return <tr>{children}</tr>;
};

export default DataTableRow;
