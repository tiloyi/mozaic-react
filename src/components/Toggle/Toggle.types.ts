import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'checked' | 'disabled' | 'size';

export interface IToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    isDisabled?: boolean;
}

export interface ITogglePartialProps {
    className?: string;
}

export enum ToggleSize {
    S = 's',
    M = 'm'
}
