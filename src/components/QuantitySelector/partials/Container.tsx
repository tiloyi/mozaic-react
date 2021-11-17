import React, { FC, createContext, useContext } from 'react';
import cn from 'classnames';
import { IQuantitySelectorContextValue, IQuantitySelectorProps } from '../QuantitySelector.types';

const QuantitySelectorContext = createContext<IQuantitySelectorContextValue>({} as IQuantitySelectorContextValue);

export function useQuantitySelector(): IQuantitySelectorContextValue {
    return useContext(QuantitySelectorContext);
}

const QuantitySelectorContainer: FC<IQuantitySelectorProps> = ({ className, children, ...props }) => {
    const increment = () => {
        debugger;
    };

    const decrement = () => {
        debugger;
    };

    const contextValue = {
        ...props,
        increment,
        decrement
    };

    return (
        <QuantitySelectorContext.Provider value={contextValue}>
            <div className={cn('mc-quantity-selector', className)}>{children}</div>
        </QuantitySelectorContext.Provider>
    );
};

export default QuantitySelectorContainer;
