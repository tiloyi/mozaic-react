import React, { FC } from 'react';
import { ITableProps } from './Table.types';
import './Table.scss';

const Table: FC<ITableProps> = ({ children }): JSX.Element => (
    <div className="mc-datatable">
        <div className="mc-datatable__container">
            <div className="mc-datatable__main">
                <table className="mc-datatable__table">{children}</table>
            </div>
        </div>
    </div>
);

export default Table;
