import { InputHTMLAttributes } from 'react';
import { IIconButtonProps, TButtonTheme } from '../Button';

export const sizes = ['s', 'm'] as const;

export type TQuantitySelectorSize = typeof sizes[number];

type TOmittedButtonProps = 'size' | 'onClick' | 'isDisabled';

type TOmittedHTMLInputProps = 'disabled' | 'size' | 'value' | 'defaultValue' | 'min' | 'max' | 'step' | 'onChange';

export interface IQuantitySelectorButtonProps extends Omit<IIconButtonProps, TOmittedButtonProps> {}

export interface IQuantitySelectorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedHTMLInputProps> {
    className?: string;
    value?: number;
    defaultValue?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    size?: TQuantitySelectorSize;
    isDisabled?: boolean;
    onChange?: (value?: number) => void;
    theme?: TButtonTheme;
}

export interface IQuantitySelectorContextProviderProps extends Omit<IQuantitySelectorProps, 'className'> {}

export interface IQuantitySelectorActionContextValue {
    size?: TQuantitySelectorSize;
    isDisabled?: boolean;
    onClick: () => void;
}

export interface IQuantitySelectorInputContextValue extends IQuantitySelectorProps {}
