import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'disabled' | 'size';

export interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    className?: string;
    isValid?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
}
