import React, { FC } from 'react';
import cn from 'classnames';
import { IToggleContainerProps } from '../Toggle.types';

const RadioContainer: FC<IToggleContainerProps> = ({ className, children, size = 'm' }) => (
    <label className={cn('mc-toggle', size === 's' && 'mc-toggle--s', className)}>{children}</label>
);

export default RadioContainer;
