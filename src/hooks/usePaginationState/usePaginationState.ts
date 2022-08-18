import { useCallback, useState } from 'react';

export interface IUsePaginationState {
    currentPage: number;
    pagesTotal: number;
    fromIndex: number;
    toIndex: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    change: (page: number) => void;
    goNext: () => void;
    goPrevious: () => void;
}

export default function usePaginationState(
    initialPage: number,
    pageSize: number,
    itemsTotal: number
): IUsePaginationState {
    const pagesTotal = Math.ceil(itemsTotal / pageSize);

    const [currentPage, setCurrentPage] = useState(initialPage);

    const change = useCallback(page => setCurrentPage(page), []);

    const goNext = useCallback(() => {
        if (currentPage < pagesTotal) {
            setCurrentPage(page => page + 1);
        }
    }, [currentPage, pagesTotal]);

    const goPrevious = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(page => page - 1);
        }
    }, [currentPage]);

    return {
        currentPage,
        pagesTotal,
        fromIndex: (currentPage - 1) * pageSize,
        toIndex: currentPage * pageSize - 1,
        hasNextPage: currentPage < pagesTotal,
        hasPreviousPage: currentPage > 1,
        change,
        goNext,
        goPrevious
    };
}
