import {InputHTMLAttributes, ReactElement} from 'react';

type TOmittedProps = 'disabled' | 'size';

export type TTextInputSize = 's' | 'm';

export interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    className?: string;
    size?: TTextInputSize;
    isValid?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    icon?: ReactElement;
}
