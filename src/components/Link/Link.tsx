import React, { FC } from 'react';
import cn from 'classnames';
import { ILinkProps, TLinkSize, TLinkTheme } from './Link.types';
import './Link.scss';

const blockClassName = 'mc-link';

function getSizeModifier(size?: TLinkSize): string {
    if (size) {
        return `${blockClassName}--${size}`;
    }

    return '';
}

function getThemeModifier(theme?: TLinkTheme): string {
    if (theme) {
        return `${blockClassName}--${theme}`;
    }

    return '';
}

const Link: FC<ILinkProps> = ({ className, children, theme, size, ...props }): JSX.Element => {
    return (
        <a className={cn(blockClassName, className, getSizeModifier(size), getThemeModifier(theme))} {...props}>
            {children}
        </a>
    );
};

export default Link;
