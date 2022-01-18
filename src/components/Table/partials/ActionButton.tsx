import React, { FC } from 'react';
import cn from 'classnames';
import { ITableActionButtonProps } from '../Table.types';

const TableActionButton: FC<ITableActionButtonProps> = ({ className, children, ...props }) => (
    <button {...props} type="button" className={cn(className, 'mc-datatable__btn', 'mc-datatable__options')}>
        {children}
    </button>
);

export default TableActionButton;
