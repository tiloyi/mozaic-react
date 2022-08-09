import React, { ChangeEvent, FC, useCallback, useRef } from 'react';
import { nanoid } from 'nanoid';
import { IRatingStarsInputProps, TRatingStarsScore } from './RatingStars.types';
import { RatingStarsContainer } from './partials';
import './RatingStars.scss';

const RatingStarsInput: FC<IRatingStarsInputProps> = ({
    className,
    size = 'm',
    name,
    score = 0,
    onChange,
    ...props
}) => {
    const nameRef = useRef(name ?? nanoid());

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange?.(Number(event.target.value) as TRatingStarsScore);
        },
        [onChange]
    );

    return (
        <RatingStarsContainer className={className} type="input" size={size} {...props}>
            <input
                type="radio"
                className="mc-stars-input__radio"
                name={nameRef.current}
                value="0"
                id={`${nameRef.current}-0`}
                checked={score === 0}
                onChange={handleChange}
            />

            <input
                type="radio"
                className="mc-stars-input__radio"
                name={nameRef.current}
                value="20"
                id={`${nameRef.current}-20`}
                checked={score === 20}
                onChange={handleChange}
            />
            <label htmlFor={`${nameRef.current}-20`} className="mc-stars-input__label">
                <span className="mc-stars-input__text" />
            </label>

            <input
                type="radio"
                className="mc-stars-input__radio"
                name={nameRef.current}
                value="40"
                id={`${nameRef.current}-40`}
                checked={score === 40}
                onChange={handleChange}
            />
            <label htmlFor={`${nameRef.current}-40`} className="mc-stars-input__label">
                <span className="mc-stars-input__text" />
            </label>

            <input
                type="radio"
                className="mc-stars-input__radio"
                name={nameRef.current}
                value="60"
                id={`${nameRef.current}-60`}
                checked={score === 60}
                onChange={handleChange}
            />
            <label htmlFor={`${nameRef.current}-60`} className="mc-stars-input__label">
                <span className="mc-stars-input__text" />
            </label>

            <input
                type="radio"
                className="mc-stars-input__radio"
                name={nameRef.current}
                value="80"
                id={`${nameRef.current}-80`}
                checked={score === 80}
                onChange={handleChange}
            />
            <label htmlFor={`${nameRef.current}-80`} className="mc-stars-input__label">
                <span className="mc-stars-input__text" />
            </label>

            <input
                type="radio"
                className="mc-stars-input__radio"
                name={nameRef.current}
                value="100"
                id={`${nameRef.current}-100`}
                checked={score === 100}
                onChange={handleChange}
            />
            <label htmlFor={`${nameRef.current}-100`} className="mc-stars-input__label">
                <span className="mc-stars-input__text" />
            </label>
        </RatingStarsContainer>
    );
};

export default RatingStarsInput;
