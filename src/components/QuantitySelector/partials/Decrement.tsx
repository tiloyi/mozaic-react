import React, { FC } from 'react';
import { IconButton } from '../../Button';
import { IQuantitySelectorButtonProps } from '../QuantitySelector.types';
import { useQuantitySelector } from './Container';

const QuantitySelectorDecrement: FC<IQuantitySelectorButtonProps> = ({ children }) => {
    const { size, isDisabled, decrement } = useQuantitySelector();

    return (
        <IconButton
            className="mc-quantity-selector__button-left"
            theme="primary"
            variant="bordered"
            size={size}
            isDisabled={isDisabled}
            onClick={decrement}
            aria-label="Decrement"
        >
            {children}
        </IconButton>
    );
};

export default QuantitySelectorDecrement;
