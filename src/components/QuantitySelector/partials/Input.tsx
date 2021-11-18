import React from 'react';
import TextInput from '../../TextInput';
import { useQuantitySelector } from './Container';

const QuantitySelectorInput = (): JSX.Element => {
    const props = useQuantitySelector();

    return <TextInput className="mc-quantity-selector__input" type="number" {...props} />;
};

export default QuantitySelectorInput;
