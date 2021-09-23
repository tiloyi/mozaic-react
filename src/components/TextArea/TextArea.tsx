import React, { FC } from 'react';
import cn from 'classnames';
import { ITextAreaProps } from './TextArea.types';
import './TextArea.scss';

const TextArea: FC<ITextAreaProps> = ({ className, isDisabled, isInvalid, isValid, ...props }: ITextAreaProps) => {
    const textAreaClassName = cn('mc-textarea', className, isInvalid && 'is-invalid', isValid && 'is-valid');

    if (isInvalid && isValid) {
        throw new Error('The properties `isValid` and `isInvalid` can not be true in the same time');
    }

    return <textarea className={textAreaClassName} {...props} aria-invalid={isInvalid} disabled={isDisabled} />;
};

export default TextArea;