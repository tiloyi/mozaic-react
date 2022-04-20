export interface IPaginationProps {
    className?: string;
    isCompact?: boolean;
    pagesNumber: number;
    previousLabel?: string;
    nextLabel?: string;
    goNext: (page: number) => void;
    goPrevious: (page: number) => void;
    goToPage: (page: number) => void;
}
