import React, { forwardRef } from 'react';
import { RadioContainer, RadioIndicator, RadioLabel } from './partials';
import { IRadioProps } from './Radio.types';
import './Radio.scss';

const Radio = forwardRef<HTMLInputElement, IRadioProps>(({ className, children, ...props }, ref) => (
    <RadioContainer className={className}>
        <RadioIndicator {...props} ref={ref} />
        <RadioLabel>{children}</RadioLabel>
    </RadioContainer>
));

Radio.displayName = 'Radio';

export default Radio;
