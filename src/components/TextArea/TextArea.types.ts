import { TextareaHTMLAttributes } from 'react';

type TOmittedProps = 'disabled';

export interface ITextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, TOmittedProps> {
    className?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
}
