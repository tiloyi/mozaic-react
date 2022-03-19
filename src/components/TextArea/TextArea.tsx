import React, { forwardRef } from 'react';
import cn from 'classnames';
import { ITextAreaProps } from './TextArea.types';
import './TextArea.scss';

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
    ({ className, isDisabled, isInvalid, isValid, ...props }, ref) => {
        if (isInvalid && isValid) {
            throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
        }

        const textAreaClassName = cn('mc-textarea', className, isInvalid && 'is-invalid', isValid && 'is-valid');

        return (
            <textarea
                className={textAreaClassName}
                {...props}
                ref={ref}
                aria-invalid={isInvalid}
                disabled={isDisabled}
            />
        );
    }
);

TextArea.displayName = 'TextArea';

export default TextArea;
