import React, { FC } from 'react';
import RadioContainer from './partials/Container';
import RadioIndicator from './partials/Indicator';
import RadioLabel from './partials/Label';
import { IRadioProps } from './Radio.types';
import './Radio.scss';

const Radio: FC<IRadioProps> = ({ className, children, ...props }) => (
    <RadioContainer className={className}>
        <RadioIndicator {...props} />
        <RadioLabel>{children}</RadioLabel>
    </RadioContainer>
);

export default Radio;
