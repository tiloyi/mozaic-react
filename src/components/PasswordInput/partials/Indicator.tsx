import React, { FC } from 'react';
import { IPasswordInputPartialProps } from '../PasswordInput.types';

const PasswordInputIndicator: FC<IPasswordInputPartialProps> = ({ children }): JSX.Element => {
    return (
        <div>{ children }</div>
    );
};

export default PasswordInputIndicator;
