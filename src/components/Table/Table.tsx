import React, { FC } from 'react';
import cn from 'classnames';
import { ITableProps } from './Table.types';

const Table: FC<ITableProps> = ({ className, children, isSubtable, ...props }): JSX.Element => {
    if (isSubtable) {
        return (
            <table className="mc-datatable__subtable" {...props}>
                {children}
            </table>
        );
    }

    return (
        <div className={cn('mc-datatable__main', className)}>
            <table className="mc-datatable__table" {...props}>
                {children}
            </table>
        </div>
    );
};

export default Table;
