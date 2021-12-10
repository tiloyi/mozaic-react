import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { THeadingTag } from '../Heading';

export interface IModalPartialProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface IModalCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    id: string;
}

export interface IModalContainerProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
}

export interface IModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    as?: THeadingTag;
}

export interface IModalProps extends IModalContainerProps {}
