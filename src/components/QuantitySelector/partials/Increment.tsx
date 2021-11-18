import React, { FC } from 'react';
import { IconButton } from '../../Button';
import { IQuantitySelectorButtonProps } from '../QuantitySelector.types';
import { useQuantitySelector } from './Container';

const QuantitySelectorIncrement: FC<IQuantitySelectorButtonProps> = ({ children }) => {
    const { value, defaultValue, maxValue, size, isDisabled, increment } = useQuantitySelector();

    const currentValue = value || defaultValue;

    const isLocked = maxValue !== undefined && currentValue !== undefined && currentValue >= maxValue;

    return (
        <IconButton
            className="mc-quantity-selector__button-right"
            size={size}
            theme="primary"
            variant="bordered"
            isDisabled={isDisabled || isLocked}
            onClick={increment}
            aria-label="Increment"
        >
            {children}
        </IconButton>
    );
};

export default QuantitySelectorIncrement;
