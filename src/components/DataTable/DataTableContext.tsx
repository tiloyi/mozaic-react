import React, { createContext, useContext, useMemo } from 'react';
import { IDataTableContextProps } from './DataTable.types';

const DataTableContext = createContext<IDataTableContextProps>({} as IDataTableContextProps);

export function useDataTableContext(): IDataTableContextProps {
    return useContext(DataTableContext);
}

export function DataTableContextProvider({ children }: IDataTableContextProps): JSX.Element {
    const contextValue = useMemo(() => ({}), []);

    return <DataTableContext.Provider value={contextValue}>{children}</DataTableContext.Provider>;
}
