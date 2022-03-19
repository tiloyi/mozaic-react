import React, { FC } from 'react';
import cn from 'classnames';
import { IBadgeProps } from './Badge.types';
import './Badge.scss';

const Badge: FC<IBadgeProps> = ({ className, children, theme = 'info', ...props }) => (
    <div className={cn('mc-badge', `mc-badge--${theme}`, className)} {...props}>
        {children}
    </div>
);

export default Badge;
