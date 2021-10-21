import React from 'react';
import TextInput from '../TextInput';
import { IDateInputProps } from './DateInput.types';

const DateInput = (props: IDateInputProps): JSX.Element => <TextInput {...props} type="date" />;

export default DateInput;
