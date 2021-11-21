import { ITextInputProps } from '../TextInput';

type TOmittedProps = 'type';

export interface IDateInputProps extends Omit<ITextInputProps, TOmittedProps> {}
