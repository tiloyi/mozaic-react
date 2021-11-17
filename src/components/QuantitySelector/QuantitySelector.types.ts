import { InputHTMLAttributes } from 'react';
import { IButtonProps } from '../Button';

export const sizes = ['s', 'm'] as const;

export type TQuantitySelectorSize = typeof sizes[number];

type TOmittedButtonProps = 'size' | 'theme' | 'variant';

type TOmittedHTMLInputProps = 'disabled' | 'size';

export interface IQuantitySelectorButtonProps extends Omit<IButtonProps, TOmittedButtonProps> {}

export interface IQuantitySelectorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedHTMLInputProps> {
    className?: string;
    size?: TQuantitySelectorSize;
    isDisabled?: boolean;
}
