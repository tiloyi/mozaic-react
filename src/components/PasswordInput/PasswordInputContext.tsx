import React, { FC, createContext, useContext, useMemo } from 'react';
import { useToggle } from '../../hooks';
import { IPasswordInputProps, TPasswordInputType } from './PasswordInput.types';

interface IPasswordInputActionContextProps {
    type: TPasswordInputType;
    isDisabled: boolean;
    hide: () => void;
    show: () => void;
}

interface IPasswordInputFieldContextProps extends IPasswordInputProps {
    type: TPasswordInputType;
}

const PasswordInputActionContext = createContext<IPasswordInputActionContextProps>(
    {} as IPasswordInputActionContextProps
);

const PasswordInputFieldContext = createContext<IPasswordInputFieldContextProps>({} as IPasswordInputFieldContextProps);

export function usePasswordInputFieldContext(): IPasswordInputFieldContextProps {
    return useContext(PasswordInputFieldContext);
}

export function usePasswordInputActionContext(): IPasswordInputActionContextProps {
    return useContext(PasswordInputActionContext);
}

export const PasswordInputContextProvider: FC<IPasswordInputProps> = ({ children, isDisabled = false, ...props }) => {
    const [type, { toLeftValue: hide, toRightValue: show }] = useToggle('password', 'text', 'password');

    const actionContextValue = useMemo(
        () => ({
            type: type as TPasswordInputType,
            hide,
            show,
            isDisabled
        }),
        [type, hide, show, isDisabled]
    );

    const fieldContextValue = {
        ...props,
        isDisabled,
        type: type as TPasswordInputType
    };

    return (
        <PasswordInputActionContext.Provider value={actionContextValue}>
            <PasswordInputFieldContext.Provider value={fieldContextValue}>
                {children}
            </PasswordInputFieldContext.Provider>
        </PasswordInputActionContext.Provider>
    );
};
