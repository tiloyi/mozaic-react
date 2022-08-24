import React, { FC } from 'react';
import './ListBox.scss';

import { IListBoxProps } from './ListBox.types';
import { ListBoxContextProvider } from './ListBoxContext';
import ListBoxContainer from './partials/ListBoxContainer';

const ListBox: FC<IListBoxProps> = ({
    defaultSelected,
    withMultiSelection = false,
    leftOpening,
    isOpened = false,
    children,
    ...props
}) => (
    <ListBoxContextProvider
        isOpened={isOpened}
        withMultiSelection={withMultiSelection}
        defaultSelected={defaultSelected}
    >
        <ListBoxContainer {...props} leftOpening={leftOpening}>
            {children}
        </ListBoxContainer>
    </ListBoxContextProvider>
);

export default ListBox;
