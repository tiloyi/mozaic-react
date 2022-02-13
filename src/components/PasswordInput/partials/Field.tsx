import React, { forwardRef } from 'react';
import TextInput from '../../TextInput';
import { usePasswordInputFieldContext } from '../PasswordInputContext';

const PasswordInputField = forwardRef<HTMLInputElement>((_, ref) => {
    const props = usePasswordInputFieldContext();

    return <TextInput className="mc-password-input__control" {...props} ref={ref} />;
});

PasswordInputField.displayName = 'MozaicPasswordInputField';

export default PasswordInputField;
