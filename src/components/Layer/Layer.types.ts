import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export interface ILayerProps {
    className?: string;
}

export interface ILayerPartialProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
