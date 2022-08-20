import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { IViewProps } from '../View';

export interface IFileUploaderFile {
    name: string;
    errorMessage?: string;
    isValid?: boolean;
    isInvalid?: boolean;
}

export interface IFileUploaderFileProps extends HTMLAttributes<HTMLDivElement>, IFileUploaderFile {
    onRemove?: (name: string) => void;
}

type TOmittedProps = 'type' | 'size';

export interface IFileUploaderInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isDisabled?: boolean;
}

export interface IFileUploaderFilesListProps extends IViewProps {
    files: Array<IFileUploaderFile>;
    onRemove?: (name: string) => void;
}

export interface IFileUploaderProps extends IFileUploaderInputProps {
    files: Array<IFileUploaderFile>;
    onRemove?: (name: string) => void;
}
