import React, { forwardRef } from 'react';
import cn from 'classnames';
import { ITextInputProps, TTextInputSize } from './TextInput.types';
import './TextInput.scss';

const blockClassName = 'mc-text-input';

function getSizeClassName(size: TTextInputSize): string {
    return size !== 'm' ? `${blockClassName}--${size}` : '';
}

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
    ({ className, type = 'text', size = 'm', isDisabled, isInvalid, isValid, icon, ...props }, ref) => {
        if (isInvalid && isValid) {
            throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
        }

        const textAreaClassName = cn(
            'mc-text-input',
            className,
            getSizeClassName(size),
            isInvalid && 'is-invalid',
            isValid && 'is-valid',
            icon && 'mc-left-icon-input__input'
        );

        const input = (
            <input
                className={textAreaClassName}
                {...props}
                ref={ref}
                type={type}
                aria-invalid={isInvalid}
                disabled={isDisabled}
                spellCheck={false}
            />
        );

        if (icon) {
            return (
                <div className="mc-left-icon-input">
                    <span className="mc-left-icon-input__icon">{icon}</span>
                    {input}
                </div>
            );
        }

        return input;
    }
);

TextInput.displayName = 'TextInput';

export default TextInput;
