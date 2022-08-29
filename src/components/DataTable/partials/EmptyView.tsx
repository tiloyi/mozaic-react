import React from 'react';
import cn from 'classnames';
import Flex from '../../Flex';
import { IDataTableEmptyViewProps } from '../DataTable.types';
import './EmptyView.scss';

const DataTableEmptyView = ({
    className,
    children,
    alignItems = 'center',
    justifyContent = 'center',
    ...props
}: IDataTableEmptyViewProps): JSX.Element => (
    <Flex
        className={cn('mc-datatable__empty-view', className)}
        {...props}
        alignItems={alignItems}
        justifyContent={justifyContent}
    >
        {children}
    </Flex>
);

export default DataTableEmptyView;
