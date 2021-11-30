import React, { FC, createContext, useContext, useMemo } from 'react';
import { TBreadcrumbsTheme } from './Breadcrumbs.types';

export interface IBreadcrumbsContextProps {
    theme?: TBreadcrumbsTheme;
}

const BreadcrumbsContext = createContext<IBreadcrumbsContextProps>({} as IBreadcrumbsContextProps);

export function useBreadcrumbs(): IBreadcrumbsContextProps {
    return useContext(BreadcrumbsContext);
}

const BreadcrumbsContextProvider: FC<IBreadcrumbsContextProps> = ({ children, theme }) => {
    const contextValue = useMemo(() => ({ theme }), [theme]);

    return <BreadcrumbsContext.Provider value={contextValue}>{children}</BreadcrumbsContext.Provider>;
};

export default BreadcrumbsContextProvider;
