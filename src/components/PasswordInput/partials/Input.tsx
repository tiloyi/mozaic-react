import React, { FC } from 'react';
import { IPasswordInputPartialProps } from '../PasswordInput.types';

const PasswordInputInput: FC<IPasswordInputPartialProps> = ({ children }): JSX.Element => {
    return (
        <div>{ children }</div>
    );
};

export default PasswordInputInput;
