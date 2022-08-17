import { ButtonHTMLAttributes, ChangeEvent, HTMLAttributes } from 'react';

export type TPaginationState = '';

export interface IPaginationActions {}

export type TUsePaginationState = [TPaginationState, IPaginationActions];

export interface IPaginationContextProps {
    currentPage: number;
    pagesTotal: number;
    isCompact?: boolean;
    isDisabled?: boolean;
    onChange?: (currentPage: number) => void;
}

export interface IPaginationContainerProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
        IPaginationContextProps {
    className?: string;
}

export interface IPaginationButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    className?: string;
    isDisabled?: boolean;
}

export interface IPaginationProps extends IPaginationContainerProps {}
