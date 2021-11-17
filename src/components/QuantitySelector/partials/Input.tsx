import React from 'react';
import TextInput from '../../TextInput';
import { useQuantitySelector } from './Container';

const QuantitySelectorInput = () => {
    const { value, size, isDisabled } = useQuantitySelector();

    return <TextInput className="mc-quantity-selector__input" size={size} isDisabled={isDisabled} value={value} />;
};

export default QuantitySelectorInput;
