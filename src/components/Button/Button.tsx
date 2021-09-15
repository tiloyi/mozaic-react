import React, { FC } from 'react';
import ButtonContainer from './partials/Container';
import ButtonLabel from './partials/Label';
import { IButtonProps } from './Button.types';

const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return (
        <ButtonContainer {...props}>
            <ButtonLabel>{children}</ButtonLabel>
        </ButtonContainer>
    );
};

export default Button;
