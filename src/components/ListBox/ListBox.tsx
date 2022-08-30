import React, { FC } from 'react';
import './ListBox.scss';

import { IListBoxProps } from './ListBox.types';
import { ListBoxContextProvider } from './ListBoxContext';
import ListBoxContainer from './partials/ListBoxContainer';

const ListBox: FC<IListBoxProps> = ({
    selected,
    withMultiSelection = false,
    leftOpening,
    isOpened = false,
    onChange,
    children,
    ...props
}) => (
    <ListBoxContextProvider
        isOpened={isOpened}
        withMultiSelection={withMultiSelection}
        selected={selected}
        onChange={onChange}
    >
        <ListBoxContainer {...props} leftOpening={leftOpening}>
            {children}
        </ListBoxContainer>
    </ListBoxContextProvider>
);

export default ListBox;
