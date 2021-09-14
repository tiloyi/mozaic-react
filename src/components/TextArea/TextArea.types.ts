import { TextareaHTMLAttributes } from 'react';

type TOmittedProps = 'disabled';

export interface ITextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, TOmittedProps> {
    className?: string;
    isValid?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
}
