import React from 'react';
import { IPasswordInputProps } from './PasswordInput.types';
import { PasswordInputContainer, PasswordInputIndicator, PasswordInputInput } from './partials';
import './PasswordInput.scss'

const PasswordInput = (props: IPasswordInputProps): JSX.Element => (
    <PasswordInputContainer { ...props }>
        <PasswordInputInput/>
        <PasswordInputIndicator/>
    </PasswordInputContainer>
);

export default PasswordInput;
