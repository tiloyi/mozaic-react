import React, { FC } from 'react';
import cn from 'classnames';
import { IButtonPartialProps } from '../Button.types';

const ButtonIcon: FC<IButtonPartialProps> = ({ className, children }) => (
    <span className={cn('mc-button__icon', className)}>{children}</span>
);

export default ButtonIcon;
