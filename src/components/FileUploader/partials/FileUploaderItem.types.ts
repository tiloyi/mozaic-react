import { HTMLAttributes, ReactNode } from "react";

export interface IFileUploadItemProps extends HTMLAttributes<HTMLLIElement>{
    status?: 'valid' | 'invalid' | 'loading';
    onDelete: () => void;
    fileName: string;
    loadingIcon?: ReactNode;
}
