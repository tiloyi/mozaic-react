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

const QuantitySelector = forwardRef<HTMLInputElement, IQuantitySelectorProps>(({ size = 'm', theme = 'primary', ...props }, ref) => (
    <QuantitySelectorContainer size={size} {...props}>
        <QuantitySelectorDecrement theme={theme} variant="bordered" aria-label="Decrement">
            <IconMinus />
        </QuantitySelectorDecrement>
        <QuantitySelectorInput ref={ref} />
        <QuantitySelectorIncrement theme={theme} variant="bordered" aria-label="Increment">
            <IconPlus />
        </QuantitySelectorIncrement>
    </QuantitySelectorContainer>
));

QuantitySelector.displayName = 'QuantitySelector';

export default QuantitySelector;
