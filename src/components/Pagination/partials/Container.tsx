import React, { FC } from 'react';
import cn from 'classnames';
import { IPaginationContainerProps } from '../Pagination.types';

const PaginationContainer: FC<IPaginationContainerProps> = ({ className, isCompact, children, ...props }) => (
    <nav {...props} className={cn('mc-pagination', isCompact && 'mc-pagination--compact', className)} role="navigation">
        {children}
    </nav>
);

export default PaginationContainer;
