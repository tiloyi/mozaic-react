import React, { FC } from 'react';
import Button from '../../Button';
import { IQuantitySelectorButtonProps } from '../QuantitySelector.types';
import { useQuantitySelector } from './Container';

const QuantitySelectorIncrement: FC<IQuantitySelectorButtonProps> = ({ children }) => {
    const { size, isDisabled } = useQuantitySelector();

    return (
        <Button
            className="mc-quantity-selector__button-right"
            size={size}
            theme="primary"
            variant="bordered"
            isDisabled={isDisabled}
        >
            {children}
        </Button>
    );
};

export default QuantitySelectorIncrement;
