import {ChangeEventHandler, InputHTMLAttributes} from "react";

export interface IFileUploaderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onChange: ChangeEventHandler<HTMLInputElement>;
    label: string;
}
