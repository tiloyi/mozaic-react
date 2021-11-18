import { OptgroupHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

export const sizes = ['s', 'm'] as const;

export type TSelectSize = typeof sizes[number];

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
    size?: TSelectSize;
    isValid?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
}
