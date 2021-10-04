import React, { FC } from 'react';
import cn from 'classnames';
import { ITooltipProps, TooltipAppearance } from './Tooltip.types';
import './Tooltip.scss';

const Tooltip: FC<ITooltipProps> = ({ children, appearance, tooltipText }) => {
    return (
        <div className={cn('mc-tooltip', `mc-tooltip--${appearance}`)} aria-describedby={TooltipAppearance[appearance]}>
            <div>{children}</div>

            <span id={TooltipAppearance[appearance]} className="mc-tooltip__content" role="tooltip">
                {tooltipText}
            </span>
        </div>
    );
};

export default Tooltip;
