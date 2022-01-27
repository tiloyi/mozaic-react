import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'type' | 'size';

export interface IFileUploaderInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isInvalid?: boolean;
    isDisabled?: boolean;
}

export interface IFileUploaderProps extends IFileUploaderInputProps {
    className?: string;
    label?: string;
    helperText?: string;
    errorMessage?: string;
    requiredText?: string;
    required?: boolean;
}
