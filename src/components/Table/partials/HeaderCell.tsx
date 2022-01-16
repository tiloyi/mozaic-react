import React, { FC } from 'react';
import { ITableHeaderCellProps } from '../Table.types';
import cn from 'classnames';

const TableHeaderCell: FC<ITableHeaderCellProps> = ({ children, variant, isSortable, ...props }) => {
    return (
        <th {...props} className={cn(variant && `mc-datatable__cell-${variant}`)}>
            {isSortable ? (
                <button type="button" className="mc-datatable__sort mc-datatable__btn">
                    <span className="mc-datatable__sort-label">{children}</span>
                    <span className="mc-datatable__sort-arrow" />
                </button>
            ) : (
                <span className="mc-datatable__head-label">{children}</span>
            )}
        </th>
    );
};

export default TableHeaderCell;
