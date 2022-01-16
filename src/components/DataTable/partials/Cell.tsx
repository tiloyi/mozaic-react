import React, { FC } from 'react';
import cn from 'classnames';
import { IDataTableCellProps } from '../DataTable.types';

const DataTableCell: FC<IDataTableCellProps> = ({ children, variant, ...props }) => (
    <td {...props} className={cn(variant && `mc-datatable__cell-${variant}`)}>
        {children}
    </td>
);

export default DataTableCell;
