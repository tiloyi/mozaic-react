import React, { FC } from 'react';
import cn from 'classnames';
import { ISubTableProps } from './Table.types';
import './Table.scss';

const SubTable: FC<ISubTableProps> = ({ className, children, ...props }): JSX.Element => (
    <table className={cn('mc-datatable__subtable', className)} {...props}>
        {children}
    </table>
);

export default SubTable;
