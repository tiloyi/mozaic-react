import React, { FC } from 'react';
import cn from 'classnames';
import { IPasswordInputProps } from '../PasswordInput.types';
import { PasswordInputContextProvider } from '../PasswordInputContext';

const PasswordInputContainer: FC<IPasswordInputProps> = ({ className, children, ...props }): JSX.Element => (
    <PasswordInputContextProvider {...props}>
        <div className={cn('mc-password-input', className)}>{children}</div>
    </PasswordInputContextProvider>
);

export default PasswordInputContainer;
