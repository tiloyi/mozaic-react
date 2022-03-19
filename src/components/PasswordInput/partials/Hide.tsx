import React, { FC } from 'react';
import { IPasswordInputActionProps } from '../PasswordInput.types';
import { usePasswordInputActionContext } from '../PasswordInputContext';

const PasswordInputHide: FC<IPasswordInputActionProps> = ({ children, ...props }) => {
    const { type, hide, isDisabled } = usePasswordInputActionContext();

    if (type === 'password') {
        return null;
    }

    return (
        <button {...props} type="button" className="mc-password-input__button" disabled={isDisabled} onClick={hide}>
            {children}
        </button>
    );
};

export default PasswordInputHide;
