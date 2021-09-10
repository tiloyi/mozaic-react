import React, { FC } from 'react';
import ToggleContainer from './partials/Container';
import ToggleIndicator from './partials/Indicator';
import ToggleLabel from './partials/Label';
import { IToggleProps, ToggleSize } from './Toggle.types';
import './Toggle.scss';

const Toggle: FC<IToggleProps> = ({ className, children, size = ToggleSize.M, ...props }) => (
    <ToggleContainer className={className} size={size}>
        <ToggleIndicator {...props} />
        <ToggleLabel>{children}</ToggleLabel>
    </ToggleContainer>
);

export default Toggle;
