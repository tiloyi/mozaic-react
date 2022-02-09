import React, { FC } from 'react';
import cn from 'classnames';
import { ITextInputProps, TTextInputSize } from './TextInput.types';
import './TextInput.scss';

const blockClassName = 'mc-text-input';

function getSizeClassName(size: TTextInputSize): string {
    return size !== 'm' ? `${blockClassName}--${size}` : '';
}

const TextInput: FC<ITextInputProps> = ({
    className,
    type = 'text',
    size = 'm',
    isDisabled,
    isInvalid,
    isValid,
    icon,
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
        isValid && 'is-valid',
        icon && 'mc-left-icon-input__input',
    );

    if (icon) {
        return (
            <div className="mc-left-icon-input">
                <span className="mc-left-icon-input__icon">
                    {icon}
                </span>
                <input className={textAreaClassName} {...props} type={type} aria-invalid={isInvalid} disabled={isDisabled} />
            </div>
        );
    }

    return (
        <input className={textAreaClassName} {...props} type={type} aria-invalid={isInvalid} disabled={isDisabled} />
    );
};

export default TextInput;
