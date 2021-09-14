import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'checked' | 'disabled' | 'size';

export interface IToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    size?: ToggleSize;
    isChecked?: boolean;
    isDisabled?: boolean;
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
