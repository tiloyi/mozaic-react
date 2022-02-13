import React, { forwardRef } from 'react';
import { IPasswordInputProps } from './PasswordInput.types';
import { PasswordInputContainer, PasswordInputField, PasswordInputHide, PasswordInputShow } from './partials';
import './PasswordInput.scss';

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>((props, ref) => (
    <PasswordInputContainer {...props}>
        <PasswordInputField ref={ref} />
        <PasswordInputShow aria-pressed="false">Show</PasswordInputShow>
        <PasswordInputHide aria-pressed="true">Hide</PasswordInputHide>
    </PasswordInputContainer>
));

PasswordInput.displayName = 'MozaicPasswordInput';

export default PasswordInput;
