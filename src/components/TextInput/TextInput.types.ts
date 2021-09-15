import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'disabled' | 'size';

export interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    className?: string;
    size?: TextInputSize;
    isValid?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
}

export enum TextInputSize {
    S = 's',
    M = 'm'
}
