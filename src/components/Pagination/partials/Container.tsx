import React, { FC } from 'react';
import cn from 'classnames';
import { IPaginationContainerProps } from '../Pagination.types';
import PaginationContextProvider from '../PaginationContext';

const PaginationContainer: FC<IPaginationContainerProps> = ({
    className,
    children,
    currentPage,
    pagesTotal,
    isCompact,
    isDisabled,
    onChange,
    ...props
}) => (
    <PaginationContextProvider
        currentPage={currentPage}
        pagesTotal={pagesTotal}
        isCompact={isCompact}
        isDisabled={isDisabled}
        onChange={onChange}
    >
        <nav
            {...props}
            className={cn('mc-pagination', isCompact && 'mc-pagination--compact', className)}
            role="navigation"
        >
            {children}
        </nav>
    </PaginationContextProvider>
);

export default PaginationContainer;
