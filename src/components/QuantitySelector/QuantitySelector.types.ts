import { InputHTMLAttributes, ButtonHTMLAttributes, ReactNode, ChangeEvent } from 'react';

export enum QuantitySelectorSize {
    'Small' = 's',
    'Medium' = 'm'
}

export type TOnChangeType = (value: number, event?: ChangeEvent<HTMLInputElement>) => void;

export interface IQuantitySelectorProps {
    className?: string;
    value: number;
    size?: QuantitySelectorSize;
    label?: string;
    min?: number;
    max?: number;
    decrementButton?: ReactNode;
    incrementButton?: ReactNode;
    inputComponent?: ReactNode;
    labelComponent?: ReactNode;
    onChange: TOnChangeType;
}

export type TInputOmmitedProps = 'type' | 'size' | 'onChange';

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TInputOmmitedProps> {
    min?: number;
    max?: number;
    value: number;
    size: QuantitySelectorSize;
    isDisabled?: boolean;
    onChange: TOnChangeType;
}

type TOmittedButtonProps = 'disabled';

export interface IDecrementButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, TOmittedButtonProps> {
    className?: string;
    content?: ReactNode | string;
    size?: QuantitySelectorSize;
    isDisabled?: boolean;
}

export interface IIncrementButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, TOmittedButtonProps> {
    className?: string;
    content?: ReactNode | string;
    size: QuantitySelectorSize;
    isDisabled?: boolean;
}
