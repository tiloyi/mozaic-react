import React, { useCallback } from 'react';

interface IUseQuantitySelector {
    min?: number;
    max?: number;
    value: number;
    onChange: (value: number) => void;
}

interface IUseQuantitySelectorCallback {
    onIncrement: () => void;
    onDecrement: () => void;
}

const useQuantitySelector = ({ min, max, value, onChange }: IUseQuantitySelector): IUseQuantitySelectorCallback => {
    const onDecrement = useCallback(() => {
        if (min !== undefined && value - 1 >= min) {
            onChange(value - 1);
        } else if (min === undefined) {
            onChange(value - 1);
        }
    }, [value, min]);

    const onIncrement = useCallback(() => {
        if (max !== undefined && value + 1 <= max) {
            onChange(value + 1);
        } else if (max === undefined) {
            onChange(value + 1);
        }
    }, [value, max]);

    return {
        onIncrement,
        onDecrement
    };
};

export default useQuantitySelector;
