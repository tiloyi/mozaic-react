import React, { FC } from 'react';
import cn from 'classnames';
import { IconButton } from '../../Button';
import { IQuantitySelectorButtonProps } from '../QuantitySelector.types';
import { useQuantitySelectorDecrement } from './Container';

const QuantitySelectorDecrement: FC<IQuantitySelectorButtonProps> = ({ className, children, ...props }) => {
    const decrementProps = useQuantitySelectorDecrement();

    return (
        <IconButton
            {...props}
            className={cn('mc-quantity-selector__button-left', className)}
            theme="primary"
            variant="bordered"
            {...decrementProps}
        >
            {children}
        </IconButton>
    );
};

export default QuantitySelectorDecrement;
