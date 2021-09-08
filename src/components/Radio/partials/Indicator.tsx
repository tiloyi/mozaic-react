import React from 'react';
import cn from 'classnames';
import { IRadioProps } from '../Radio.types';

const RadioIndicator = ({ className, isChecked, isDisabled, isInvalid, ...props }: IRadioProps) => (
    <input
        className={cn('mc-radio__input', isInvalid && 'is-invalid', className)}
        {...props}
        type="radio"
        checked={isChecked}
        disabled={isDisabled}
    />
);

export default RadioIndicator;
