import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { ITableHeaderCellProps } from '../Table.types';

const TableHeaderCell: FC<ITableHeaderCellProps> = ({
    className,
    children,
    variant,
    isSortable,
    sortDirection,
    onSort,
    ...props
}) => {
    const handleSort = useCallback(() => onSort?.(sortDirection === 'asc' ? 'desc' : 'asc'), [onSort, sortDirection]);

    return (
        <th {...props} className={cn(className, variant && `mc-datatable__cell-${variant}`)}>
            {isSortable ? (
                <button
                    type="button"
                    className={cn('mc-datatable__sort', 'mc-datatable__btn', sortDirection)}
                    onClick={handleSort}
                >
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
