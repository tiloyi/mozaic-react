import { InputHTMLAttributes } from 'react';
import { TOptionGroupValue } from '../OptionGroup/OptionGroup.types';

type TOmittedProps = 'checked' | 'disabled' | 'width' | 'value' | 'onChange' | 'type';

const widths = ['fit', 'full'] as const;

export type TOptionButtonWidth = typeof widths[number];

const types = ['radio', 'checkbox'] as const;

export type TOptionButtonType = typeof types[number];

export interface IOptionButtonIndicator extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (value?: TOptionGroupValue) => void;
    type?: TOptionButtonType;
    value?: TOptionGroupValue;
}

export interface IOptionButtonProps extends IOptionButtonIndicator {
    width?: TOptionButtonWidth;
}

export interface IOptionButtonPartialProps {
    className?: string;
    width?: TOptionButtonWidth;
}
