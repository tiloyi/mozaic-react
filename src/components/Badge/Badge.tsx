import React, { FC } from 'react';
import cn from 'classnames';
import { BadgeTheme, IBadgeProps } from './Badge.types';
import './Badge.scss';

const Badge: FC<IBadgeProps> = ({ className, children, theme = BadgeTheme.Info, ...props }) => (
    <div className={cn('mc-badge', `mc-badge--${theme}`, className)} {...props}>
        {children}
    </div>
);

export default Badge;
