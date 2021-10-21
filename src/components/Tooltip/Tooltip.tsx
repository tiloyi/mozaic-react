import React, { FC } from 'react';
import cn from 'classnames';
import { ITooltipProps } from './Tooltip.types';
import './Tooltip.scss';

const Tooltip: FC<ITooltipProps> = ({ className, children, id, placement, label, ...props }) => {
    return (
        <div className={cn('mc-tooltip', `mc-tooltip--${placement}`, className)} aria-describedby={id} {...props}>
            {children}
            <span id={id} className={cn('mc-tooltip__content')} role="tooltip">
                {label}
            </span>
        </div>
    );
};

export default Tooltip;
