import React, { FC } from 'react';
import cn from 'classnames';
import ButtonContainer from './partials/Container';
import ButtonIcon from './partials/Icon';
import { IIconButtonProps } from './Button.types';
import './Button.scss';

const IconButton: FC<IIconButtonProps> = ({ className, children, ...props }) => {
    return (
        <ButtonContainer {...props} className={cn(className, 'mc-button--square')}>
            <ButtonIcon>{children}</ButtonIcon>
        </ButtonContainer>
    );
};

export default IconButton;
