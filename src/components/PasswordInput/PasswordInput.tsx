import React from 'react';
import { IPasswordInputProps } from './PasswordInput.types';
import { PasswordInputContainer, PasswordInputField, PasswordInputHide, PasswordInputShow } from './partials';
import './PasswordInput.scss';

const PasswordInput = (props: IPasswordInputProps): JSX.Element => (
    <PasswordInputContainer {...props}>
        <PasswordInputField />
        <PasswordInputShow aria-pressed="false">Show</PasswordInputShow>
        <PasswordInputHide aria-pressed="true">Hide</PasswordInputHide>
    </PasswordInputContainer>
);

export default PasswordInput;
