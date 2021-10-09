import { OptgroupHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

export interface ISelectOption extends Omit<OptionHTMLAttributes<HTMLOptionElement>, 'disabled'> {
    isDisabled?: boolean;
}

export interface ISelectOptionGroup extends Omit<OptgroupHTMLAttributes<HTMLOptGroupElement>, 'disabled'> {
    options: Array<ISelectOption>;
    isDisabled?: boolean;
}

type TOmittedProps = 'disabled' | 'size';

export interface ISelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, TOmittedProps> {
    className?: string;
    options: Array<ISelectOption | ISelectOptionGroup>;
    size?: SelectSize;
    isValid?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
}

export enum SelectSize {
    S = 's',
    M = 'm'
}
