import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

export interface ISelectOption extends OptionHTMLAttributes<HTMLOptionElement> {
    isDisabled?: boolean;
}

type TOmittedProps = 'disabled' | 'size';

export interface ISelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, TOmittedProps> {
    className?: string;
    options: Array<ISelectOption>;
    size?: SelectSize;
    isValid?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
}

export enum SelectSize {
    S = 's',
    M = 'm'
}
