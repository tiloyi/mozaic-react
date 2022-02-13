import React, { forwardRef } from 'react';
import {
    QuantitySelectorContainer,
    QuantitySelectorDecrement,
    QuantitySelectorIncrement,
    QuantitySelectorInput
} from './partials';
import { IconMinus, IconPlus } from './assets';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import './QuantitySelector.scss';

const QuantitySelector = forwardRef<HTMLInputElement, IQuantitySelectorProps>(({ size = 'm', ...props }, ref) => (
    <QuantitySelectorContainer size={size} {...props}>
        <QuantitySelectorDecrement theme="primary" variant="bordered" aria-label="Decrement">
            <IconMinus />
        </QuantitySelectorDecrement>
        <QuantitySelectorInput ref={ref} />
        <QuantitySelectorIncrement theme="primary" variant="bordered" aria-label="Increment">
            <IconPlus />
        </QuantitySelectorIncrement>
    </QuantitySelectorContainer>
));

QuantitySelector.displayName = 'MozaicQuantitySelector';

export default QuantitySelector;
