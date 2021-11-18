import { InputHTMLAttributes } from 'react';
import { IIconButtonProps } from '../Button';

export const sizes = ['s', 'm'] as const;

export type TQuantitySelectorSize = typeof sizes[number];

type TOmittedButtonProps = 'size' | 'theme' | 'variant';

type TOmittedHTMLInputProps = 'disabled' | 'size' | 'value' | 'defaultValue' | 'min' | 'max' | 'step';

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
}

export interface IQuantitySelectorContextValue extends IQuantitySelectorProps {
    increment: () => void;
    decrement: () => void;
}
