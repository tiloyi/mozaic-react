import React, { FC } from 'react';
import Button from '../../Button';
import { IQuantitySelectorButtonProps } from '../QuantitySelector.types';
import { useQuantitySelector } from './Container';

const QuantitySelectorDecrement: FC<IQuantitySelectorButtonProps> = ({ children }) => {
    const { size, isDisabled } = useQuantitySelector();

    return (
        <Button
            className="mc-quantity-selector__button-left"
            theme="primary"
            variant="bordered"
            size={size}
            isDisabled={isDisabled}
        >
            {children}
        </Button>
    );
};

export default QuantitySelectorDecrement;
