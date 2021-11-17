import React from 'react';
import {
    QuantitySelectorContainer,
    QuantitySelectorDecrement,
    QuantitySelectorIncrement,
    QuantitySelectorInput
} from './partials';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import './QuantitySelector.scss';

const QuantitySelector = (props: IQuantitySelectorProps): JSX.Element => {
    return (
        <QuantitySelectorContainer {...props}>
            <QuantitySelectorDecrement>+</QuantitySelectorDecrement>
            <QuantitySelectorInput />
            <QuantitySelectorIncrement>-</QuantitySelectorIncrement>
        </QuantitySelectorContainer>
    );
};

export default QuantitySelector;
