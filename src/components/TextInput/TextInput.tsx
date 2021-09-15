import React, { FC } from 'react';
import cn from 'classnames';
import { ITextInputProps } from './TextInput.types';
import './TextInput.scss';

const TextInput: FC<ITextInputProps> = ({
    className,
    type = 'text',
    isDisabled,
    isInvalid,
    isValid,
    ...props
}: ITextInputProps) => {
    const textAreaClassName = cn('mc-text-input', className, isInvalid && 'is-invalid', isValid && 'is-valid');

    if (isInvalid && isValid) {
        throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
    }

    return <input className={textAreaClassName} {...props} aria-invalid={isInvalid} disabled={isDisabled} />;
};

export default TextInput;
