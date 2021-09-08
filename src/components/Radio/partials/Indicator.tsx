import React from 'react';
import cn from 'classnames';
import { IRadioProps } from '../Radio.types';

const RadioIndicator = ({ className, isChecked, isDisabled, ...props }: IRadioProps) => (
    <input
        className={cn('mc-radio__input', className)}
        {...props}
        type="radio"
        checked={isChecked}
        disabled={isDisabled}
    />
);

export default RadioIndicator;
