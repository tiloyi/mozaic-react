import React from 'react';
import TextInput from '../../TextInput';
import { usePasswordInputFieldContext } from '../PasswordInputContext';

const PasswordInputField = (): JSX.Element => {
    const props = usePasswordInputFieldContext();

    return <TextInput className="mc-password-input__control" {...props} />;
};

export default PasswordInputField;
