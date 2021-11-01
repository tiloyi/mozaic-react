import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { THeadingTag } from '../Heading/Heading.types';

export type TModalId = string;

export interface IModalPartialProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface IModalCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    id: TModalId;
}

export interface IModalContainerProps extends HTMLAttributes<HTMLDivElement> {
    id: TModalId;
}

export interface IModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    as?: THeadingTag;
}

export interface IModalProps extends IModalContainerProps {}
