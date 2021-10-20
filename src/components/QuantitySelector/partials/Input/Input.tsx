import React, { FC } from 'react';
import cn from 'classnames';
import { IInputProps } from '../../QuantitySelector.types';

const Input: FC<IInputProps> = ({ value, min, max, size, isDisabled, onChange, ...restProps }) => {
    return (
        <input
            {...restProps}
            className={cn('mc-text-input mc-quantity-selector__input', `mc-text-input--${size}`)}
            type="number"
            value={value}
            min={min}
            max={max}
            aria-label={restProps['aria-label'] || 'QuantitySelector'}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            onChange={event => {
                if (!isDisabled && onChange) {
                    onChange(Number(event.target.value), event);
                }
            }}
        />
    );
};

export default Input;
