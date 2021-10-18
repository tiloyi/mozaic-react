import React from 'react';
import cn from 'classnames';
import { IToggleProps } from '../Toggle.types';

const ToggleIndicator = ({ className, isChecked, isDisabled, size, ...props }: IToggleProps): JSX.Element => (
    <input
        className={cn('mc-toggle__input', className)}
        {...props}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
    />
);

export default ToggleIndicator;
