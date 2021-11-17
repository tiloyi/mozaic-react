import React, { FC } from 'react';
import { IconButton } from '../../Button';
import { IQuantitySelectorButtonProps } from '../QuantitySelector.types';
import { useQuantitySelector } from './Container';

const QuantitySelectorIncrement: FC<IQuantitySelectorButtonProps> = ({ children }) => {
    const { size, isDisabled, increment } = useQuantitySelector();

    return (
        <IconButton
            className="mc-quantity-selector__button-right"
            size={size}
            theme="primary"
            variant="bordered"
            isDisabled={isDisabled}
            onClick={increment}
            aria-label="Increment"
        >
            {children}
        </IconButton>
    );
};

export default QuantitySelectorIncrement;
