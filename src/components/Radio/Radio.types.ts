import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'checked' | 'disabled' | 'size';

export interface IRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isChecked?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
}

export interface IRadioPartialProps {
    className?: string;
}
