import React, { FC } from 'react';
import cn from 'classnames';
import { ITextAreaProps } from './TextArea.types';
import './TextArea.scss';

const TextArea: FC<ITextAreaProps> = (props: ITextAreaProps) => <textarea {...props} />;

export default TextArea;
