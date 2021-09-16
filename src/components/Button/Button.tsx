import React, { FC } from 'react';
import ButtonContainer from './partials/Container';
import ButtonLabel from './partials/Label';
import { IButtonProps } from './Button.types';
import './Button.scss';
import ButtonIcon from './partials/Icon';

const Button: FC<IButtonProps> = ({ children, leftIcon, rightIcon, ...props }) => (
    <ButtonContainer {...props}>
        {leftIcon && <ButtonIcon>{leftIcon}</ButtonIcon>}
        <ButtonLabel>{children}</ButtonLabel>
        {rightIcon && <ButtonIcon>{rightIcon}</ButtonIcon>}
    </ButtonContainer>
);

export default Button;
