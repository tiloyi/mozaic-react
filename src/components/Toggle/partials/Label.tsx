import React, { FC } from 'react';
import cn from 'classnames';
import { ITogglePartialProps } from '../Toggle.types';

const ToggleLabel: FC<ITogglePartialProps> = ({ className, children }) => (
    <div className={cn('mc-toggle__label', className)}>
        <span className="mc-toggle__content">{children}</span>
    </div>
);

export default ToggleLabel;
