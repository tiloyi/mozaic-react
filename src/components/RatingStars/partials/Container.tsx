import React, { FC } from 'react';
import cn from 'classnames';
import { IRatingStarsContainerProps } from '../RatingStars.types';

const blockClassName = 'mc-stars';

const RatingStarsContainer: FC<IRatingStarsContainerProps> = ({ className, children, type, size = 'm' }) => {
    return (
        <div className={cn(className, `${blockClassName}-${type}`, `${blockClassName}-${type}--${size}`)}>
            {children}
        </div>
    );
};

export default RatingStarsContainer;
