import { InputHTMLAttributes } from 'react';
import { TOptionGroupValue } from '../OptionGroup/OptionGroup.types';

type TOmittedProps = 'checked' | 'disabled' | 'width' | 'value' | 'onClick' | 'type';

export const widths = ['fit', 'full'] as const;

export type TButtonWidth = typeof widths[number];

export const typeOptionButton = ['radio', 'checkbox'] as const;

export type TTypeOptionButton = typeof typeOptionButton[number];

export interface IOptionButtonIndicator extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    isDisabled?: boolean;
    onClick?: (value?: TOptionGroupValue) => void;
    type?: TTypeOptionButton;
    value?: TOptionGroupValue;
}

export interface IOptionButtonProps extends IOptionButtonIndicator {
    width?: TButtonWidth;
}

export interface IOptionButtonPartialProps {
    className?: string;
    width?: TButtonWidth;
}
