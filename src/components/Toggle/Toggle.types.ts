import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'checked' | 'disabled' | 'size';

export interface IToggleIndicatorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    isDisabled?: boolean;
}

export interface IToggleProps extends IToggleIndicatorProps {
    size?: ToggleSize;
}

export interface ITogglePartialProps {
    className?: string;
}

export interface IToggleContainerProps extends ITogglePartialProps {
    size?: ToggleSize;
}

export enum ToggleSize {
    S = 's',
    M = 'm'
}
