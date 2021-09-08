import React, { FC } from 'react';
import cn from 'classnames';
import { IFlagProps, FlagTheme, FlagVariant } from './Flag.types';
import './Flag.scss';

const Flag: FC<IFlagProps> = ({
    className,
    children,
    theme = FlagTheme.Primary,
    variant = FlagVariant.Solid,
    ...props
}) => {
    return (
        <div className={cn('mc-flag', className)} {...props}>
            {children}
        </div>
    );
};

export default Flag;
