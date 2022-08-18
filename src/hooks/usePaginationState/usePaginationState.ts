import { useCallback, useState } from 'react';

export interface IUsePaginationState {
    currentPage: number;
    pagesTotal: number;
    offset: number;
    fromItem: number;
    toItem: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    change: (page: number) => void;
    goNext: () => void;
    goPrevious: () => void;
}

export default function usePaginationState(
    initialPage: number,
    itemsTotal: number,
    pageSize: number
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
        offset: currentPage * pageSize,
        fromItem: (currentPage - 1) * pageSize + 1,
        toItem: currentPage * pageSize,
        hasNextPage: currentPage < pagesTotal,
        hasPreviousPage: currentPage > 1,
        change,
        goNext,
        goPrevious
    };
}
