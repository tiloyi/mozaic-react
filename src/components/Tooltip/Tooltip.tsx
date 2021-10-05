import React, { FC } from 'react';
import cn from 'classnames';
import { ITooltipProps, TooltipPlacement } from './Tooltip.types';
import './Tooltip.scss';

const Tooltip: FC<ITooltipProps> = ({ children, id, placement, text }) => {
    return (
        <div
            className={cn('mc-tooltip', `mc-tooltip--${placement}`)}
            aria-describedby={id || TooltipPlacement[placement]}
        >
            <div>{children}</div>

            <span id={id || TooltipPlacement[placement]} className="mc-tooltip__content" role="tooltip">
                {text}
            </span>
        </div>
    );
};

export default Tooltip;
