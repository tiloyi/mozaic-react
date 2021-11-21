import React from 'react';
import TextInput from '../../TextInput';
// import { useQuantitySelectorInput } from './Container';

const QuantitySelectorInput = (): JSX.Element => {
    // const {} = useQuantitySelectorInput();

    // const { maxValue, minValue, increment, decrement, onChange, ...props } = useQuantitySelector();

    return (
        <TextInput
            className="mc-quantity-selector__input"
            type="number"
            // {...props}
            // max={maxValue}
            // min={minValue}
            // aria-valuemax={maxValue}
            // aria-valuemin={minValue}
        />
    );
};

export default QuantitySelectorInput;
