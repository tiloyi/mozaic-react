import React, { FC } from 'react';
import cn from 'classnames';
import { IListBoxContainerProps } from '../ListBox.types';

const ListBoxContainer: FC<IListBoxContainerProps> = ({ className, children, tabIndex = -1, ...props }) => (
    <ul className={cn('mc-listbox', className)} role="listbox" tabIndex={tabIndex} {...props}>
        {children}
    </ul>
);

export default ListBoxContainer;
