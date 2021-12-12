import { ITextInputProps } from '../TextInput';
import { ButtonHTMLAttributes } from 'react';

type TOmittedInputProps = 'type' | 'size' | 'isValid' | 'isInvalid';

export type TPasswordInputType = 'text' | 'password';

export interface IPasswordInputProps extends Omit<ITextInputProps, TOmittedInputProps> {}

type TOmittedActionProps = 'size' | 'onClick' | 'isDisabled';

export interface IPasswordInputActionProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, TOmittedActionProps> {}
