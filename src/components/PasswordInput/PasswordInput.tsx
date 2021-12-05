import React, { FC } from 'react';
import { IPasswordInputProps } from './PasswordInput.types';
import './PasswordInput.scss'

const PasswordInput: FC<IPasswordInputProps> = ({ children }): JSX.Element => {
    return (
        <div>{ children }</div>
    );
};

export default PasswordInput;
