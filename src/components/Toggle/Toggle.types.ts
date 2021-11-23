import { InputHTMLAttributes } from 'react';

export const sizes = ['s', 'm'] as const;

export type TToggleSize = typeof sizes[number];

type TOmittedProps = 'checked' | 'disabled' | 'size';

export interface IToggleIndicatorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    isDisabled?: boolean;
}

export interface IToggleProps extends IToggleIndicatorProps {
    size?: TToggleSize;
}

export interface ITogglePartialProps {
    className?: string;
}

export interface IToggleContainerProps extends ITogglePartialProps {
    size?: TToggleSize;
}
