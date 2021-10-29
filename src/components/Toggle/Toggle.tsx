import React, { FC } from 'react';
import { ToggleContainer, ToggleIndicator, ToggleLabel } from './partials';
import { IToggleProps, ToggleSize } from './Toggle.types';
import './Toggle.scss';

const Toggle: FC<IToggleProps> = ({ className, children, size = ToggleSize.M, ...props }) => (
    <ToggleContainer className={className} size={size}>
        <ToggleIndicator {...props} />
        <ToggleLabel>{children}</ToggleLabel>
    </ToggleContainer>
);

export default Toggle;
