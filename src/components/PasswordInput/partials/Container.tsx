import React, { FC } from 'react';
import { IPasswordInputProps } from '../PasswordInput.types';

const PasswordInputContainer: FC<IPasswordInputProps> = ({ children }): JSX.Element => {
    return (
        <div>{ children }</div>
    );
};

export default PasswordInputContainer;
