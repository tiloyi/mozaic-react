import React, { FC } from 'react';
import cn from 'classnames';
import { IRatingStarsProps } from './RatingStars.types';
import RatingStarInput from './partials/Input';
import { RatingStarLabel } from './partials';
import './RatingStars.scss';

const blockClassName = 'mc-stars';

const RatingStars: FC<IRatingStarsProps> = ({
    className,
    type = 'result',
    size = 'm',
    score = 0,
    name,
    handleChange
}) => {
    if (type === 'input') {
        return (
            <div
                className={cn(className, `${blockClassName}-${type}`, `${blockClassName}-${type}--${size}`)}
                data-testid="rating-stars-wrapper"
            >
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
            </div>
        );
    }
    return (
        <div
            className={cn(
                className,
                `${blockClassName}-${type}`,
                `${blockClassName}-${type}--${size}`,
                `${blockClassName}-result--score-${score}`
            )}
            data-testid="rating-stars-wrapper"
        >
            <span className="mc-stars-result__visual"/>
        </div>
    );
};

export default RatingStars;
