import React, { FC, createContext, useContext } from 'react';
import cn from 'classnames';
import {
    IQuantitySelectorContextValue,
    IQuantitySelectorActionContextValue,
    IQuantitySelectorInputContextValue,
    IQuantitySelectorProps
} from '../QuantitySelector.types';

const QuantitySelectorContext = createContext<IQuantitySelectorContextValue>({} as IQuantitySelectorContextValue);

const QuantitySelectorIncrementContext = createContext<IQuantitySelectorActionContextValue>(
    {} as IQuantitySelectorActionContextValue
);

const QuantitySelectorDecrementContext = createContext<IQuantitySelectorActionContextValue>(
    {} as IQuantitySelectorActionContextValue
);

const QuantitySelectorInputContext = createContext<IQuantitySelectorInputContextValue>(
    {} as IQuantitySelectorInputContextValue
);

export function useQuantitySelector(): IQuantitySelectorContextValue {
    return useContext(QuantitySelectorContext);
}

export function useQuantitySelectorIncrement(): IQuantitySelectorActionContextValue {
    return useContext(QuantitySelectorIncrementContext);
}

export function useQuantitySelectorDecrement(): IQuantitySelectorActionContextValue {
    return useContext(QuantitySelectorDecrementContext);
}

export function useQuantitySelectorInput(): IQuantitySelectorInputContextValue {
    return useContext(QuantitySelectorInputContext);
}

const QuantitySelectorContainer: FC<IQuantitySelectorProps> = ({ className, children, onChange, ...props }) => {
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

// const { value, defaultValue, maxValue, size, isDisabled, increment } = useQuantitySelector();
//
// const currentValue = value || defaultValue;
//
// const isLocked = maxValue !== undefined && currentValue !== undefined && currentValue >= maxValue;

// const { value, defaultValue, minValue, size, isDisabled, decrement } = useQuantitySelector();
//
// const currentValue = value || defaultValue;
//
// const isLocked = minValue !== undefined && currentValue !== undefined && currentValue <= minValue;
