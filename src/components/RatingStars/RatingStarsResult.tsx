import React, { FC } from 'react';
import cn from 'classnames';
import { IRatingStarsResultProps } from './RatingStars.types';
import { RatingStarsContainer } from './partials';
import './RatingStars.scss';

const RatingStarsResult: FC<IRatingStarsResultProps> = ({ className, score = 0, size = 'm', ...props }) => (
    <RatingStarsContainer
        className={cn(className, `mc-stars-result--score-${score}`)}
        type="result"
        size={size}
        {...props}
    >
        <span className="mc-stars-result__visual" />
    </RatingStarsContainer>
);

export default RatingStarsResult;
