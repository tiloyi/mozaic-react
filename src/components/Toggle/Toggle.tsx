import React, { FC } from 'react';
import ToggleContainer from './partials/Container';
import ToggleIndicator from './partials/Indicator';
import ToggleLabel from './partials/Label';
import { IToggleProps } from './Toggle.types';
import './Toggle.scss';

const Toggle: FC<IToggleProps> = ({ className, children, ...props }) => (
    <ToggleContainer className={className}>
        <ToggleIndicator {...props} />
        <ToggleLabel>{children}</ToggleLabel>
    </ToggleContainer>
);

export default Toggle;
