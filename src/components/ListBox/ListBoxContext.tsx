import React, { FC, createContext, useContext, useMemo } from 'react';
import { IListBoxContextValue } from './ListBox.types';

const ListBoxContext = createContext<IListBoxContextValue>({} as IListBoxContextValue);

export function useListBoxContext(): IListBoxContextValue {
    return useContext(ListBoxContext);
}

export const ListBoxContextProvider: FC<IListBoxContextValue> = ({ mode, value, values, onClick, children }) => {
    const contextValue = useMemo(() => ({ value, mode, values, onClick }), [value, mode, values, onClick]);

    return <ListBoxContext.Provider value={contextValue}>{children}</ListBoxContext.Provider>;
};
