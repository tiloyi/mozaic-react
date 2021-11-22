import React, { FC } from 'react';
import { ToggleContainer, ToggleIndicator, ToggleLabel } from './partials';
import { IToggleProps } from './Toggle.types';
import './Toggle.scss';

const Toggle: FC<IToggleProps> = ({ className, children, size = 'm', ...props }) => (
    <ToggleContainer className={className} size={size}>
        <ToggleIndicator {...props} />
        <ToggleLabel>{children}</ToggleLabel>
    </ToggleContainer>
);

export default Toggle;
