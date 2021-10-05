import React, { FC } from 'react';
import cn from 'classnames';
import { ITooltipProps } from './Tooltip.types';
import './Tooltip.scss';

const Tooltip: FC<ITooltipProps> = ({ children, id, placement, text, content }) => {
    return (
        <div className={cn('mc-tooltip', `mc-tooltip--${placement}`)} aria-describedby={id}>
            <div>{children}</div>

            <span id={id} className={cn('mc-tooltip__content')} role="tooltip">
                {content || text}
            </span>
        </div>
    );
};

export default Tooltip;
