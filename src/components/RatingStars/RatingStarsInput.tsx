import React, { FC } from 'react';
import cn from 'classnames';
import { IRatingStarsResultProps } from './RatingStars.types';
import { RatingStarLabel, RatingStarsContainer } from './partials';
import './RatingStars.scss';
import RatingStarInput from './partials/Input';

const RatingStarsInput: FC<IRatingStarsResultProps> = ({ className, size = 'm', ...props }) => {
    const name = 'rating-stars';

    const handleChange = () => {};

    return (
        <RatingStarsContainer className={className} type="input" size={size}>
            <RatingStarInput value="0" checked handleChange={handleChange} name={name} />

            <RatingStarInput value="1" handleChange={handleChange} name={name} />
            <RatingStarLabel value="1" text="Very bad" name={name} />

            <RatingStarInput value="2" handleChange={handleChange} name={name} />
            <RatingStarLabel value="2" text="Bad" name={name} />

            <RatingStarInput value="3" handleChange={handleChange} name={name} />
            <RatingStarLabel value="3" text="Medium" name={name} />

            <RatingStarInput value="4" handleChange={handleChange} name={name} />
            <RatingStarLabel value="4" text="Good" name={name} />

            <RatingStarInput value="5" handleChange={handleChange} name={name} />
            <RatingStarLabel value="5" text="Excellent" name={name} />
        </RatingStarsContainer>
    );
};

export default RatingStarsInput;
