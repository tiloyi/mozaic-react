import React, { FC } from 'react';
import cn from 'classnames';
import { FlagTheme, FlagVariant, IFlagProps } from './Flag.types';
import './Flag.scss';

const blockClassName = 'mc-flag';

function getFlagModifier(theme: FlagTheme, variant: FlagVariant): string {
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
}) => (
    <div className={cn(blockClassName, className, getFlagModifier(theme, variant))} {...props}>
        {children}
    </div>
);

export default Flag;
