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

const QuantitySelector = forwardRef<HTMLInputElement, IQuantitySelectorProps>(
    ({ size = 'm', theme = 'primary', variant = 'bordered', ...props }, ref) => (
        <QuantitySelectorContainer size={size} {...props}>
            <QuantitySelectorDecrement theme={theme} variant={variant} aria-label="Decrement">
                <IconMinus />
            </QuantitySelectorDecrement>
            <QuantitySelectorInput ref={ref} />
            <QuantitySelectorIncrement theme={theme} variant={variant} aria-label="Increment">
                <IconPlus />
            </QuantitySelectorIncrement>
        </QuantitySelectorContainer>
    )
);

QuantitySelector.displayName = 'QuantitySelector';

export default QuantitySelector;
