import React, { FC } from 'react';
import cn from 'classnames';
import { IFlagProps, TFlagTheme, TFlagVariant } from './Flag.types';
import './Flag.scss';

const blockClassName = 'mc-flag';

function getFlagModifier(theme: TFlagTheme, variant: TFlagVariant): string {
    const parts = [`${blockClassName}-`];

    parts.push(variant);

    if (theme !== 'primary') {
        parts.push(theme);
    }

    return parts.join('-');
}

const Flag: FC<IFlagProps> = ({ className, children, theme = 'primary', variant = 'solid', ...props }) => (
    <div className={cn(blockClassName, className, getFlagModifier(theme, variant))} {...props}>
        {children}
    </div>
);

export default Flag;
