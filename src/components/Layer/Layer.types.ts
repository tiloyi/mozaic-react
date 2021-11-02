import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { TModalId } from '../Modal/Modal.types';
import { THeadingTag } from '../Heading/Heading.types';

export interface ILayerProps {
    className?: string;
}

export interface ILayerPartialProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface ILayerCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export interface ILayerContainerProps extends HTMLAttributes<HTMLDivElement> {
    id: TModalId;
}

export interface ILayerTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    as?: THeadingTag;
}
