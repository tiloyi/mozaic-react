import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { TModalId } from '../Modal/Modal.types';

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
