import React, { FC, createContext, useCallback, useContext, useMemo } from 'react';
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
    defaultValue,
    value,
    maxValue,
    minValue,
    step = 1,
    size,
    isDisabled,
    onChange,
    ...props
}) => {
    const currentValue = value ?? defaultValue;

    const increment = useCallback(() => {
        const nextValue = (currentValue ?? 0) + step;

        if (maxValue !== undefined && nextValue > maxValue) {
            return;
        }

        onChange?.(nextValue);
    }, [currentValue, maxValue, step]);

    const decrement = useCallback(() => {
        const nextValue = (currentValue ?? 0) - step;

        if (minValue !== undefined && nextValue < minValue) {
            return;
        }

        onChange?.(nextValue);
    }, [currentValue, minValue, step]);

    const incrementContextValue = useMemo(
        () => ({
            size,
            isDisabled:
                isDisabled || (maxValue !== undefined && currentValue !== undefined && currentValue >= maxValue),
            onClick: increment
        }),
        [currentValue, maxValue, size, isDisabled, increment]
    );

    const decrementContextValue = useMemo(
        () => ({
            size,
            isDisabled:
                isDisabled || (minValue !== undefined && currentValue !== undefined && currentValue <= minValue),
            onClick: decrement
        }),
        [currentValue, minValue, size, isDisabled, decrement]
    );

    const inputContextValue = {
        defaultValue,
        value,
        maxValue,
        minValue,
        step,
        size,
        isDisabled,
        onChange,
        ...props
    };

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
