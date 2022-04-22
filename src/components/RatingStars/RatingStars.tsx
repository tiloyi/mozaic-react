import React, { FC } from 'react';
import cn from 'classnames';
import { IRatingStarsProps } from './RatingStars.types';
import RatingStarInput from './partials/Input';
import { RatingStarLabel } from './partials';
import './RatingStars.scss';

const blockClassName = 'mc-stars';

const RatingStars: FC<IRatingStarsProps> = ({ className, type, size = 'm', name, handleChange }) => {
    if (type === 'input') {
        return (
            <div className={cn(className, `${blockClassName}-${type}`, `${blockClassName}-${type}--${size}`)}>
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
    // <div className={cn(blockClassName, `${blockClassName}--${theme}`, className)} {...props}></div>;
    return (
        <div className="mc-stars-result mc-stars-result--score-30">
            <span className="mc-stars-result__visual"></span>
            <span className="mc-stars-result__text">Global score: 1,5/5</span>
        </div>
    );
};

export default RatingStars;
