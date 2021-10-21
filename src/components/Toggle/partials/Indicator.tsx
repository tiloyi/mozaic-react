import React from 'react';
import cn from 'classnames';
import { IToggleIndicatorProps } from '../Toggle.types';

const ToggleIndicator = ({ className, isChecked, isDisabled, ...props }: IToggleIndicatorProps): JSX.Element => (
    <input
        className={cn('mc-toggle__input', className)}
        {...props}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
    />
);

export default ToggleIndicator;
