import React, { forwardRef } from 'react';
import cn from 'classnames';
import { IToggleIndicatorProps } from '../Toggle.types';

const ToggleIndicator = forwardRef<HTMLInputElement, IToggleIndicatorProps>(
    ({ className, isChecked, isDisabled, ...props }, ref) => (
        <input
            className={cn('mc-toggle__input', className)}
            {...props}
            ref={ref}
            type="checkbox"
            checked={isChecked}
            disabled={isDisabled}
        />
    )
);

ToggleIndicator.displayName = 'MozaicToggleIndicator';

export default ToggleIndicator;
