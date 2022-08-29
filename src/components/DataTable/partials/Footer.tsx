import React from 'react';
import cn from 'classnames';
import { IDataTableFooterProps } from '../DataTable.types';

const DataTableFooter = ({ className, children, ...props }: IDataTableFooterProps): JSX.Element => (
    <footer className={cn('mc-datatable__footer', className)} {...props}>
        {children}
    </footer>
);

export default DataTableFooter;
