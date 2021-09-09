import React, { FC } from 'react';
import cn from 'classnames';
import { ITogglePartialProps } from '../Toggle.types';

const RadioContainer: FC<ITogglePartialProps> = ({ className, children }) => {
    return <label className={cn('mc-toggle', className)}>{children}</label>;
};

export default RadioContainer;
