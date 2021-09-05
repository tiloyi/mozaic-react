import React, { FC, ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props}>{ children }</button>
    );
};

export default Button;
