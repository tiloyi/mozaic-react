import React, { forwardRef } from 'react';
import TextInput from '../TextInput';
import { IDateInputProps } from './DateInput.types';

const DateInput = forwardRef<HTMLInputElement, IDateInputProps>((props, ref) => (
    <TextInput {...props} ref={ref} type="date" />
));

DateInput.displayName = 'DateInput';

export default DateInput;
