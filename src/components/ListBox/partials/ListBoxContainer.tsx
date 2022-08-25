import React, { FC } from 'react';
import cn from 'classnames';

import { useListBoxContext } from '../ListBoxContext';
import { IListBoxContainerProps } from '../ListBox.types';

const ListBoxContainer: FC<IListBoxContainerProps> = ({ leftOpening, children }) => {
    const { isOpened } = useListBoxContext();

    return (
        <ul
            tabIndex={-1}
            role="listbox"
            aria-label="listbox"
            className={cn('mc-listbox', leftOpening && 'mc-listbox--left', isOpened && 'is-open')}
        >
            {children}
        </ul>
    );
};

export default ListBoxContainer;
