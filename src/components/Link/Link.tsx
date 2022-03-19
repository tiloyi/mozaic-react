import { AnchorHTMLAttributes, createElement, DetailedHTMLProps, FC } from 'react';
import cn from 'classnames';
import { ILinkProps, TLinkSize, TLinkTheme } from './Link.types';
import './Link.scss';

const blockClassName = 'mc-link';

export function getSizeModifier(size?: TLinkSize): string {
    if (size) {
        return `${blockClassName}--${size}`;
    }

    return '';
}

export function getThemeModifier(theme?: TLinkTheme): string {
    if (theme) {
        return `${blockClassName}--${theme}`;
    }

    return '';
}

export function getLinkProps({
    className,
    size,
    theme,
    ...props
}: ILinkProps): DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    return {
        className: cn(blockClassName, className, getSizeModifier(size), getThemeModifier(theme)),
        ...props
    };
}

const Link: FC<ILinkProps> = ({ children, ...props }) => createElement('a', getLinkProps(props), children);

export default Link;
