import React, { FC } from 'react';
import cn from 'classnames';
import { ITooltipProps } from './Tooltip.types';
import './Tooltip.scss';

const Tooltip: FC<ITooltipProps> = ({ children, id, placement, label, ...restProps }) => {
    return (
        <div className={cn('mc-tooltip', `mc-tooltip--${placement}`)} aria-describedby={id} {...restProps}>
            {children}
            <span id={id} className={cn('mc-tooltip__content')} role="tooltip">
                {label}
            </span>
        </div>
    );
};

export default Tooltip;
