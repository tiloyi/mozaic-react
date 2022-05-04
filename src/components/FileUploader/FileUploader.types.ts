import { InputHTMLAttributes } from 'react';

type TOmittedProps = 'type' | 'size' | 'id';

export interface IFileUploaderInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isDisabled?: boolean;
    id: string;
}

export interface IFileUploaderListProps {
    files: Array<File>;
    onDeleteFile: (fileName: string) => void;
}

export interface IFileUploaderContainerProps {
    className?: string;
}

export interface IFileUploaderProps extends IFileUploaderInputProps, IFileUploaderListProps {}
