import React, { FC, createContext, useContext, useMemo } from 'react';
import {
    IQuantitySelectorActionContextValue,
    IQuantitySelectorInputContextValue,
    IQuantitySelectorContextProviderProps
} from './QuantitySelector.types';

const QuantitySelectorIncrementContext = createContext<IQuantitySelectorActionContextValue>(
    {} as IQuantitySelectorActionContextValue
);

const QuantitySelectorDecrementContext = createContext<IQuantitySelectorActionContextValue>(
    {} as IQuantitySelectorActionContextValue
);

const QuantitySelectorInputContext = createContext<IQuantitySelectorInputContextValue>(
    {} as IQuantitySelectorInputContextValue
);

export function useQuantitySelectorIncrement(): IQuantitySelectorActionContextValue {
    return useContext(QuantitySelectorIncrementContext);
}

export function useQuantitySelectorDecrement(): IQuantitySelectorActionContextValue {
    return useContext(QuantitySelectorDecrementContext);
}

export function useQuantitySelectorInput(): IQuantitySelectorInputContextValue {
    return useContext(QuantitySelectorInputContext);
}

export const QuantitySelectorContextProvider: FC<IQuantitySelectorContextProviderProps> = ({
    children,
    onChange,
    size = 'm',
    isDisabled,
    ...props
}) => {
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

    const incrementContextValue = useMemo(
        () => ({
            size,
            isDisabled,
            onClick: increment
        }),
        [size, isDisabled, increment]
    );

    const decrementContextValue = useMemo(
        () => ({
            size,
            isDisabled,
            onClick: decrement
        }),
        [size, isDisabled, decrement]
    );

    const inputContextValue = {};

    return (
        <QuantitySelectorInputContext.Provider value={inputContextValue}>
            <QuantitySelectorIncrementContext.Provider value={incrementContextValue}>
                <QuantitySelectorDecrementContext.Provider value={decrementContextValue}>
                    {children}
                </QuantitySelectorDecrementContext.Provider>
            </QuantitySelectorIncrementContext.Provider>
        </QuantitySelectorInputContext.Provider>
    );
};

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
