import React, { FC } from 'react';
import cn from 'classnames';
import { IRatingStarsContainerProps, TRatingStarsSize, TRatingStarsType } from '../RatingStars.types';

export function getTypeModifier(type: TRatingStarsType): string {
    return `mc-stars-${type}`;
}

export function getSizeModifier(type: TRatingStarsType, size: TRatingStarsSize): string {
    return `${getTypeModifier(type)}--${size}`;
}

const RatingStarsContainer: FC<IRatingStarsContainerProps> = ({ className, children, type, size = 'm', ...props }) => (
    <div className={cn(className, getTypeModifier(type), getSizeModifier(type, size))} {...props}>
        {children}
    </div>
);

export default RatingStarsContainer;
