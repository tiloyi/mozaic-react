import React, { FC } from 'react';
import { IDataTableProps } from './DataTable.types';
import './DataTable.scss'

const DataTable: FC<IDataTableProps> = ({ children }): JSX.Element => {
    return (
        <div>{ children }</div>
    );
};

export default DataTable;
