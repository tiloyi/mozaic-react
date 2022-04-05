import React, { FC } from 'react';
import cn from 'classnames';
import { TTableSortDirection } from '../Table';

interface IHeaderCellButtonProps {
    isSortable?: boolean;
    sortingDirection?: TTableSortDirection;
    handleSort: () => void;
}

const HeaderCellButton: FC<IHeaderCellButtonProps> = ({ children, isSortable, sortingDirection, handleSort }) =>
    isSortable ? (
        <button
            type="button"
            className={cn('mc-datatable__sort', 'mc-datatable__btn', sortingDirection)}
            onClick={handleSort}
        >
            <span className="mc-datatable__sort-label">{children}</span>
            <span className="mc-datatable__sort-arrow" />
        </button>
    ) : (
        <span className="mc-datatable__head-label">{children}</span>
    );

export default HeaderCellButton;
