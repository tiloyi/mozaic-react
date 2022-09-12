import React, { FC } from 'react';
import { ListBoxContainer } from './partials';
import { ListBoxContextProvider } from './ListBoxContext';
import { IListBoxProps } from './ListBox.types';
import './ListBox.scss';

const ListBox: FC<IListBoxProps> = ({ children, mode = 'none', value, values, onClick, ...props }) => (
    <ListBoxContextProvider mode={mode} value={value} values={values} onClick={onClick}>
        <ListBoxContainer {...props}>{children}</ListBoxContainer>
    </ListBoxContextProvider>
);

export default ListBox;
