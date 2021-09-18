import React, { FC } from 'react';
import cn from 'classnames';
import { ITextInputProps, TextInputSize } from './TextInput.types';
import './TextInput.scss';

const blockClassName = 'mc-text-input';

function getTextInputSizeClassName(size: TextInputSize): string {
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
    const textAreaClassName = cn(
        'mc-text-input',
        className,
        getTextInputSizeClassName(size),
        isInvalid && 'is-invalid',
        isValid && 'is-valid'
    );

    if (isInvalid && isValid) {
        throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
    }

    return (
        <input className={textAreaClassName} {...props} type={type} aria-invalid={isInvalid} disabled={isDisabled} />
    );
};

export default TextInput;
