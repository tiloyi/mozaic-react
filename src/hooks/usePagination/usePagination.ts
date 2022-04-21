import { ChangeEvent, useMemo, useState } from 'react';
import { chunk } from 'lodash';

interface IUsePagination {
    handlePage: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    handleNext: () => void;
    handlePrevious: () => void;
    handleItemsPerPage: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    currentPage: number;
    itemsPerPage: number;
    pagesNumber: number;
    totalItems: number;
    items: (number | string | Record<string, string>)[];
}

function usePagination(initialItems: (number | string | Record<string, string>)[]): IUsePagination {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalItems = useMemo(() => initialItems.length, [initialItems]);
    const chunkItems = chunk(initialItems, itemsPerPage);
    const items: (number | string | Record<string, string>)[] = useMemo(
        () => chunkItems[currentPage - 1],
        [chunkItems, currentPage]
    );
    const pagesNumber = useMemo(() => chunkItems.length, [chunkItems]);

    const handlePage = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
        const newPage = Number(event.target.value);
        setCurrentPage(newPage);
    };
    const handleNext = (): void => {
        setCurrentPage(current => current + 1);
    };
    const handlePrevious = (): void => {
        setCurrentPage(current => current - 1);
    };
    const handleItemsPerPage = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
        const newItemsPerPage = Number(event.target.value);
        setItemsPerPage(newItemsPerPage);
    };

    return {
        handlePage,
        handleNext,
        handlePrevious,
        handleItemsPerPage,
        currentPage,
        itemsPerPage,
        items,
        pagesNumber,
        totalItems
    };
}

export default usePagination;
