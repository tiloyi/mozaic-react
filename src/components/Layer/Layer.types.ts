import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { THeadingTag } from '../Heading';

export interface ILayerPartialProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface ILayerCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    id: string;
}

export interface ILayerContainerProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
}

export interface ILayerTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    as?: THeadingTag;
}

export interface ILayerProps extends ILayerContainerProps {}
