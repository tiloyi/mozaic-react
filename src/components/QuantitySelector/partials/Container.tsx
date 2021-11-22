import React, { FC } from 'react';
import cn from 'classnames';
import { IQuantitySelectorProps } from '../QuantitySelector.types';
import { QuantitySelectorContextProvider } from '../QuantitySelectorContext';

const QuantitySelectorContainer: FC<IQuantitySelectorProps> = ({ className, children, ...props }) => (
    <QuantitySelectorContextProvider {...props}>
        <div className={cn('mc-quantity-selector', className)}>{children}</div>
    </QuantitySelectorContextProvider>
);

export default QuantitySelectorContainer;
