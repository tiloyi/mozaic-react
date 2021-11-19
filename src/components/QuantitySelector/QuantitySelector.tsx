import React from 'react';
import {
    QuantitySelectorContainer,
    QuantitySelectorDecrement,
    QuantitySelectorIncrement,
    QuantitySelectorInput
} from './partials';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import './QuantitySelector.scss';

const QuantitySelector = (props: IQuantitySelectorProps): JSX.Element => (
    <QuantitySelectorContainer {...props}>
        <QuantitySelectorDecrement aria-label="Decrement">-</QuantitySelectorDecrement>
        <QuantitySelectorInput />
        <QuantitySelectorIncrement aria-label="Increment">+</QuantitySelectorIncrement>
    </QuantitySelectorContainer>
);

export default QuantitySelector;
