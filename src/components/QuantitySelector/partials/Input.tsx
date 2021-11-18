import React from 'react';
import TextInput from '../../TextInput';
import { useQuantitySelector } from './Container';

const QuantitySelectorInput = (): JSX.Element => {
    const { maxValue, minValue, ...props } = useQuantitySelector();

    return (
        <TextInput
            className="mc-quantity-selector__input"
            type="number"
            {...props}
            max={maxValue}
            min={minValue}
            aria-valuemax={maxValue}
            aria-valuemin={minValue}
        />
    );
};

export default QuantitySelectorInput;
