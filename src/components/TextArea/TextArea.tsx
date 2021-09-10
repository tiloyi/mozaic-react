import React, { FC } from 'react';
import cn from 'classnames';
import { ITextAreaProps } from './TextArea.types';
import './TextArea.scss';

const TextArea: FC<ITextAreaProps> = ({ className, isDisabled, isInvalid, ...props }: ITextAreaProps) => (
    <textarea className={cn('mc-textarea', className, isInvalid && 'is-invalid')} {...props} disabled={isDisabled} />
);

export default TextArea;
