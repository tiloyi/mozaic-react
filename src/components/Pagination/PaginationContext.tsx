import React, { FC, createContext, useContext, useMemo } from 'react';
import { IPaginationContextProps } from './Pagination.types';

const PaginationContext = createContext<IPaginationContextProps>({} as IPaginationContextProps);

export function usePaginationContext(): IPaginationContextProps {
    return useContext(PaginationContext);
}

const PaginationContextProvider: FC<IPaginationContextProps> = ({
    children,
    currentPage,
    pagesTotal,
    options,
    isCompact,
    isDisabled,
    onChange,
    onNext,
    onPrevious
}) => {
    const contextValue = useMemo(
        () => ({ currentPage, pagesTotal, options, isCompact, isDisabled, onChange, onNext, onPrevious }),
        [currentPage, pagesTotal, options, isCompact, isDisabled, onChange, onNext, onPrevious]
    );

    return <PaginationContext.Provider value={contextValue}>{children}</PaginationContext.Provider>;
};

export default PaginationContextProvider;
