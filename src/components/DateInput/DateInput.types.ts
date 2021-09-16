import { ITextInputProps } from '../TextInput/TextInput.types';

type TOmittedProps = 'type';

export interface IDateInputProps extends Omit<ITextInputProps, TOmittedProps> {}
