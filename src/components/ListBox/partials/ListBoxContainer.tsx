import React, { FC } from 'react';
import cn from 'classnames';

import { useListBoxContext } from '../ListBoxContext';
import { IListBoxContainerProps } from '../ListBox.types';

const ListBoxContainer: FC<IListBoxContainerProps> = ({ leftOpening, children, ...props }) => {
    const { isOpened } = useListBoxContext();

    return (
        <ul
            {...props}
            tabIndex={-1}
            role="listbox"
            aria-label="listbox"
            className={cn(props.className, 'mc-listbox', leftOpening && 'mc-listbox--left', isOpened && 'is-open')}
        >
            {children}
        </ul>
    );
};

export default ListBoxContainer;
