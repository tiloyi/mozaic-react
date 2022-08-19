import { HTMLAttributes, InputHTMLAttributes } from 'react';

export interface IFileUploaderListItemProps extends HTMLAttributes<HTMLLIElement> {
    className?: string;
    name: string;
    isValid?: boolean;
    isInvalid?: boolean;
    onRemove?: (name: string) => void;
}

type TOmittedProps = 'type' | 'size' | 'id';

export interface IFileUploaderInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TOmittedProps> {
    isDisabled?: boolean;
    id: string;
}

export interface IFileUploaderListProps extends HTMLAttributes<HTMLUListElement> {
    className?: string;
    files: Array<IFileUploaderListItemProps>;
    onRemove?: (name: string) => void;
}

export interface IFileUploaderContainerProps {
    className?: string;
}

export interface IFileUploaderProps extends IFileUploaderInputProps, IFileUploaderListProps {}
