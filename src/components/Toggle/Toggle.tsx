import React, { forwardRef } from 'react';
import { ToggleContainer, ToggleIndicator, ToggleLabel } from './partials';
import { IToggleProps } from './Toggle.types';
import './Toggle.scss';

const Toggle = forwardRef<HTMLInputElement, IToggleProps>(({ className, children, size = 'm', ...props }, ref) => (
    <ToggleContainer className={className} size={size}>
        <ToggleIndicator {...props} ref={ref} />
        <ToggleLabel>{children}</ToggleLabel>
    </ToggleContainer>
));

Toggle.displayName = 'MozaicToggle';

export default Toggle;
