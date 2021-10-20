import React, { FC, useCallback, useEffect } from 'react';
import cn from 'classnames';
import { IQuantitySelectorProps, QuantitySelectorSize } from './QuantitySelector.types';
import './QuantitySelector.scss';

import Input from './partials/Input';
import DecrementButton from './partials/DecrementButton';
import IncrementButton from './partials/IncrementButton';

import useQuantitySelector from '../../hooks/useQuantitySelector';

const QuantitySelector: FC<IQuantitySelectorProps> = ({
    className,
    value,
    size = QuantitySelectorSize.Small,
    label,
    min,
    max,
    labelComponent,
    inputComponent,
    onChange
}) => {
    // if initial value is lower than minimum or higher than maximum set it to the edge value
    useEffect(() => {
        if (min !== undefined && value < min) {
            onChange(min);
        } else if (max !== undefined && value > max) {
            onChange(max);
        }
    }, [value, min, max]);

    const { onDecrement, onIncrement } = useQuantitySelector({
        min,
        max,
        value,
        onChange
    });

    return (
        <>
            {labelComponent}
            {labelComponent === undefined && label && <div className={'mc-field__label'}>{label}</div>}
            <div className={cn('mc-quantity-selector', className)}>
                <DecrementButton size={size} onClick={onDecrement} />
                {inputComponent || <Input min={min} max={max} onChange={onChange} value={value} size={size} />}
                <IncrementButton size={size} onClick={onIncrement} />
            </div>
        </>
    );
};

export default QuantitySelector;
