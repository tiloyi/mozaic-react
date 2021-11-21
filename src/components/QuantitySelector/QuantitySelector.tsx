import React from 'react';
import {
    QuantitySelectorContainer,
    QuantitySelectorDecrement,
    QuantitySelectorIncrement,
    QuantitySelectorInput
} from './partials';
import { IconMinus, IconPlus } from './assets';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import './QuantitySelector.scss';

const QuantitySelector = (props: IQuantitySelectorProps): JSX.Element => (
    <QuantitySelectorContainer {...props}>
        <QuantitySelectorDecrement theme="primary" variant="bordered" aria-label="Decrement">
            <IconMinus />
        </QuantitySelectorDecrement>
        <QuantitySelectorInput />
        <QuantitySelectorIncrement theme="primary" variant="bordered" aria-label="Increment">
            <IconPlus />
        </QuantitySelectorIncrement>
    </QuantitySelectorContainer>
);

export default QuantitySelector;
