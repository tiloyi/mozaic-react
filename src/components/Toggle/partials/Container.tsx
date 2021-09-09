import React, { FC } from 'react';
import cn from 'classnames';
import { IToggleContainerProps, ToggleSize } from '../Toggle.types';

const RadioContainer: FC<IToggleContainerProps> = ({ className, children, size = ToggleSize.M }) => {
    return <label className={cn('mc-toggle', size === ToggleSize.S && 'mc-toggle--s', className)}>{children}</label>;
};

export default RadioContainer;
