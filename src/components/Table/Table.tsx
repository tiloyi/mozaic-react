import React, { FC } from 'react';
import { ITableProps } from './Table.types';
import './Table.scss';

const Table: FC<ITableProps> = ({ children }): JSX.Element => {
    return (
        <div className="mc-datatable">
            <table className="mc-datatable__table">{children}</table>
        </div>
    );
};

export default Table;
