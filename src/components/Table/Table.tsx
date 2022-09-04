import React, { FC } from 'react';
import cn from 'classnames';
import { ITableProps } from './Table.types';

const Table: FC<ITableProps> = ({ className, children, ...props }): JSX.Element => (
    <div className={cn('mc-datatable__main', className)}>
        <table className="mc-datatable__table" {...props}>
            {children}
        </table>
    </div>
);

export default Table;
