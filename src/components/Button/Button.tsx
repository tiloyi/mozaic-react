import React, { FC } from 'react';
import { ButtonContainer, ButtonIcon, ButtonLabel } from './partials';
import { IButtonProps } from './Button.types';
import './Button.scss';

const Button: FC<IButtonProps> = ({ children, leftIcon, rightIcon, ...props }) => (
    <ButtonContainer {...props}>
        {leftIcon && <ButtonIcon>{leftIcon}</ButtonIcon>}
        <ButtonLabel>{children}</ButtonLabel>
        {rightIcon && <ButtonIcon>{rightIcon}</ButtonIcon>}
    </ButtonContainer>
);

export default Button;
