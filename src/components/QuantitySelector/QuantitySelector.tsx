import React, { FC } from 'react';
import { IQuantitySelectorProps, QuantitySelectorSize } from './QuantitySelector.types';
import './QuantitySelector.scss';

import Input from './partials/Input';
import DecrementButton from './partials/DecrementButton';
import IncrementButton from './partials/IncrementButton';

const QuantitySelector: FC<IQuantitySelectorProps> = ({
    value,
    size = QuantitySelectorSize.Small,
    label,
    onChange
}) => {
    return (
        <>
            {label && <div className={'mc-field__label'}>{label}</div>}
            <div className="mc-quantity-selector">
                <DecrementButton size={size} />
                <Input onChange={onChange} value={value} size={size} />
                <IncrementButton size={size} />
            </div>
        </>
    );
};

export default QuantitySelector;
