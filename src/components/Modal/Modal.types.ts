import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export interface IModalProps {
    className?: string;
}

export interface IModalPartialProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface IModalCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
