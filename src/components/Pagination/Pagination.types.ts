import { ChangeEvent } from 'react';

export interface IPaginationProps {
    className?: string;
    pagesNumber: number;
    currentPage: number;
    handleNext: () => void;
    handlePrevious: () => void;
    handlePage: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    isCompact?: boolean;
}
