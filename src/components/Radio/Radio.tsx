import React, { FC } from 'react';
import { RadioContainer, RadioIndicator, RadioLabel } from './partials';
import { IRadioProps } from './Radio.types';
import './Radio.scss';

const Radio: FC<IRadioProps> = ({ className, children, ...props }) => (
    <RadioContainer className={className}>
        <RadioIndicator {...props} />
        <RadioLabel>{children}</RadioLabel>
    </RadioContainer>
);

export default Radio;
