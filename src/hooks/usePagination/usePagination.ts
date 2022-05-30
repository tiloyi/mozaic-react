import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
interface IUsePagination {
    handleChangePage: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    handleNext: () => void;
    handlePrevious: () => void;
    handleItemsPerPage: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    setCurrentPage: Dispatch<SetStateAction<number>>
    currentPage: number;
    itemsPerPage: number;
}

function usePagination(): IUsePagination {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handleChangePage = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
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
        handleChangePage,
        handleNext,
        handlePrevious,
        handleItemsPerPage,
        currentPage,
        setCurrentPage,
        itemsPerPage
    };
}

export default usePagination;
