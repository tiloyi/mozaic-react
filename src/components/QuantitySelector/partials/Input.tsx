import React, { ChangeEvent, forwardRef, useCallback } from 'react';
import TextInput from '../../TextInput';
import { useQuantitySelectorInput } from '../QuantitySelectorContext';

const QuantitySelectorInput = forwardRef<HTMLInputElement>((_, ref) => {
    const { maxValue, minValue, onChange, ...props } = useQuantitySelectorInput();

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            const nextValue = value.length > 0 ? Number(value) : undefined;

            if (nextValue !== undefined) {
                if (maxValue !== undefined && nextValue > maxValue) {
                    return;
                }

                if (minValue !== undefined && nextValue < minValue) {
                    return;
                }
            }

            onChange?.(nextValue);
        },
        [maxValue, minValue, onChange]
    );

    return (
        <TextInput
            className="mc-quantity-selector__input"
            type="number"
            {...props}
            ref={ref}
            max={maxValue}
            min={minValue}
            aria-valuemax={maxValue}
            aria-valuemin={minValue}
            onChange={handleChange}
        />
    );
});

QuantitySelectorInput.displayName = 'MozaicQuantitySelectorInput';

export default QuantitySelectorInput;
