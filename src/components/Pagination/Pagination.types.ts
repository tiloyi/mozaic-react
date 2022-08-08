import { ButtonHTMLAttributes, ChangeEvent, HTMLAttributes } from 'react';

export type TPaginationState = '';

export interface IPaginationActions {}

export type TUsePaginationState = [TPaginationState, IPaginationActions];

export interface IPaginationContainerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    isCompact?: boolean;
}

export interface IPaginationButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    className?: string;
    isCompact?: boolean;
    isDisabled?: boolean;
}

export interface IPaginationProps {
    className?: string;
    pagesTotal: number;
    currentPage: number;
    // pageSize: number;
    // currentPage: number;
    // handleNext: () => void;
    // handlePrevious: () => void;
    // handleChangePage: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    onChange?: (currentPage: number) => void;
    isCompact?: boolean;
    isDisabled?: boolean;
}
