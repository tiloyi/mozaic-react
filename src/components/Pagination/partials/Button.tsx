import React, { FC } from 'react';
import cn from 'classnames';
import { IPaginationButtonProps } from '../Pagination.types';

const PaginationButton: FC<IPaginationButtonProps> = ({ className, children, isDisabled, ...props }) => (
    <button {...props} type="button" className={cn('mc-pagination__button', className)} disabled={isDisabled}>
        {children}
    </button>
);

export default PaginationButton;
