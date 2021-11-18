import React, { FC } from 'react';
import { IconButton } from '../../Button';
import { IQuantitySelectorButtonProps } from '../QuantitySelector.types';
import { useQuantitySelector } from './Container';

const QuantitySelectorDecrement: FC<IQuantitySelectorButtonProps> = ({ children }) => {
    const { value, minValue, size, isDisabled, decrement } = useQuantitySelector();

    const isLocked = minValue !== undefined && value !== undefined && value <= minValue;

    return (
        <IconButton
            className="mc-quantity-selector__button-left"
            theme="primary"
            variant="bordered"
            size={size}
            isDisabled={isDisabled || isLocked}
            onClick={decrement}
            aria-label="Decrement"
        >
            {children}
        </IconButton>
    );
};

export default QuantitySelectorDecrement;
