import React, { FC } from 'react';
import ButtonContainer from './partials/Container';
import ButtonIcon from './partials/Icon';
import { IIconButtonProps } from './Button.types';

const IconButton: FC<IIconButtonProps> = ({ children, ...props }) => {
    return (
        <ButtonContainer {...props}>
            <ButtonIcon>{children}</ButtonIcon>
        </ButtonContainer>
    );
};

export default IconButton;
