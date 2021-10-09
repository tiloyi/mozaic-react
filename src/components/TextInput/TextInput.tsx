import React, { FC } from 'react';
import cn from 'classnames';
import { ITextInputProps, TextInputSize } from './TextInput.types';
import './TextInput.scss';

const blockClassName = 'mc-text-input';

function getSizeClassName(size: TextInputSize): string {
    return size !== TextInputSize.M ? `${blockClassName}--${size}` : '';
}

const TextInput: FC<ITextInputProps> = ({
    className,
    type = 'text',
    size = TextInputSize.M,
    isDisabled,
    isInvalid,
    isValid,
    ...props
}: ITextInputProps) => {
    if (isInvalid && isValid) {
        throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
    }

    const textAreaClassName = cn(
        'mc-text-input',
        className,
        getSizeClassName(size),
        isInvalid && 'is-invalid',
        isValid && 'is-valid'
    );

    return (
        <input className={textAreaClassName} {...props} type={type} aria-invalid={isInvalid} disabled={isDisabled} />
    );
};

export default TextInput;
