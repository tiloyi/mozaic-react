import React, { FC } from 'react';
import cn from 'classnames';
import { FlagTheme, FlagVariant, IFlagProps } from './Flag.types';
import './Flag.scss';

const blockClassName = 'mc-flag';

function getModifier(theme: FlagTheme, variant: FlagVariant): string {
    const parts = [`${blockClassName}-`];

    parts.push(variant);

    if (theme !== FlagTheme.Primary) {
        parts.push(theme);
    }

    return parts.join('-');
}

const Flag: FC<IFlagProps> = ({
    className,
    children,
    theme = FlagTheme.Primary,
    variant = FlagVariant.Solid,
    ...props
}) => {
    return (
        <div className={cn(blockClassName, className, getModifier(theme, variant))} {...props}>
            {children}
        </div>
    );
};

export default Flag;
