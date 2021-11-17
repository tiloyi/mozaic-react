import React, { FC, createContext, useContext } from 'react';
import cn from 'classnames';
import { IQuantitySelectorProps } from '../QuantitySelector.types';

const QuantitySelectorContext = createContext<IQuantitySelectorProps>({} as IQuantitySelectorProps);

export function useQuantitySelector(): IQuantitySelectorProps {
    return useContext(QuantitySelectorContext);
}

const QuantitySelectorContainer: FC<IQuantitySelectorProps> = ({ className, children, ...props }) => {
    return (
        <QuantitySelectorContext.Provider value={props}>
            <div className={cn('mc-quantity-selector', className)}>{children}</div>
        </QuantitySelectorContext.Provider>
    );
};

export default QuantitySelectorContainer;
