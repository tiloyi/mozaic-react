import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { ISelectOption } from '../Select';

export interface IPaginationOption extends ISelectOption {}

export interface IPaginationContextProps {
    currentPage: number;
    pagesTotal: number;
    options?: Array<IPaginationOption>;
    isCompact?: boolean;
    isDisabled?: boolean;
    onChange?: (currentPage: number) => void;
    onNext?: () => void;
    onPrevious?: () => void;
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
