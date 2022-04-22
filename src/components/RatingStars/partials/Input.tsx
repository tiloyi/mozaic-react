import React, { FC } from 'react';
import { IRatingStarInputProps } from '../RatingStars.types';
import '../RatingStars.scss';

const RatingStarInput: FC<IRatingStarInputProps> = ({ value, checked,name, handleChange }) => (
    <input
        type="radio"
        name={name}
        value={value}
        id={value === "0"? `no-rate--${name}` : `ratingstar${value}--${name}`}
        className="mc-stars-input__radio"
        defaultChecked={checked}
        aria-label={value ==="0" ? "No opinion given" : ""}
        onChange={handleChange}
    />
);

export default RatingStarInput;
