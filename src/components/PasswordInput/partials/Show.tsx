import React, { FC } from 'react';
import { IPasswordInputActionProps } from '../PasswordInput.types';
import { usePasswordInputActionContext } from '../PasswordInputContext';

const PasswordInputShow: FC<IPasswordInputActionProps> = ({ children, ...props }) => {
    const { type, show, isDisabled } = usePasswordInputActionContext();

    if (type === 'text') {
        return null;
    }

    return (
        <button {...props} type="button" className="mc-password-input__button" disabled={isDisabled} onClick={show}>
            {children}
        </button>
    );
};

export default PasswordInputShow;
