import React, { FC } from 'react';
import { IRatingStarLabelProps } from '../RatingStars.types';

const RatingStarLabel: FC<IRatingStarLabelProps> = ({ value, text, name }) => (
    <label htmlFor={`ratingstar${value}--${name}`} className="mc-stars-input__label">
        <span className="mc-stars-input__text">{text}</span>
    </label>
);

export default RatingStarLabel;