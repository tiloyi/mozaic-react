import React, { FC } from 'react';
import { ITableHeaderLabelProps } from '../Table.types';

const TableHeaderLabel: FC<ITableHeaderLabelProps> = ({ children }) => {
    return <span className="mc-datatable__head-label">{children}</span>;
};

export default TableHeaderLabel;
