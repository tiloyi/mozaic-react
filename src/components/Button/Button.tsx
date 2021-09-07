import React, { FC } from 'react';
import { IButtonProps } from './Button.types';
import './Button.scss';

const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

export default Button;
