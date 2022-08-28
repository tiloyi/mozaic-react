import React, { FC, createContext, useContext, useMemo } from 'react';
import { IListBoxContextProps, IListBoxContextProviderProps } from './ListBox.types';
import useListBoxState from './useListBoxState';

const ListBoxContext = createContext<IListBoxContextProps>({} as IListBoxContextProps);

export function useListBoxContext(): IListBoxContextProps {
    return useContext(ListBoxContext);
}

export const ListBoxContextProvider: FC<IListBoxContextProviderProps> = ({
    defaultSelected,
    withMultiSelection = false,
    isOpened,
    onChange,
    children
}) => {
    const { isItemChecked, check } = useListBoxState({ defaultSelected, withMultiSelection, onChange });

    const contextValue = useMemo(
        () => ({ isOpened, isItemChecked, withMultiSelection, check }),
        [isOpened, isItemChecked, withMultiSelection, check]
    );

    return <ListBoxContext.Provider value={contextValue}>{children}</ListBoxContext.Provider>;
};
