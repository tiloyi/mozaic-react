import React, { FC } from 'react';
import cn from 'classnames';
import { IRatingStarsResultProps, TRatingStarsScore } from './RatingStars.types';
import { RatingStarsContainer } from './partials';
import './RatingStars.scss';

export function getScoreModifier(score: TRatingStarsScore): string {
    return `mc-stars-result--score-${score}`;
}

const RatingStarsResult: FC<IRatingStarsResultProps> = ({ className, score = 0, size = 'm', ...props }) => (
    <RatingStarsContainer className={cn(className, getScoreModifier(score))} type="result" size={size} {...props}>
        <span className="mc-stars-result__visual" />
    </RatingStarsContainer>
);

export default RatingStarsResult;
