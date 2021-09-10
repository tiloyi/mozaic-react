import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'checked' | 'disabled' | 'size';

export interface ICheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
}

export interface ICheckBoxPartialProps {
    className?: string;
}
