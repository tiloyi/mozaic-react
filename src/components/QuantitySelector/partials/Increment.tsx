import React, { FC } from 'react';
import cn from 'classnames';
import { IconButton } from '../../Button';
import { IQuantitySelectorButtonProps } from '../QuantitySelector.types';
import { useQuantitySelectorIncrement } from './Container';

const QuantitySelectorIncrement: FC<IQuantitySelectorButtonProps> = ({ className, children, ...props }) => {
    const incrementProps = useQuantitySelectorIncrement();

    return (
        <IconButton
            {...props}
            className={cn('mc-quantity-selector__button-right', className)}
            theme="primary"
            variant="bordered"
            {...incrementProps}
        >
            {children}
        </IconButton>
    );
};

export default QuantitySelectorIncrement;
