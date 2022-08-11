import React, { FC } from 'react';
import cn from 'classnames';
import { ILinkTagProps, TTagSize, TTagTheme } from './Tag.types';

export function getSizeModifier(size: TTagSize): string {
    if (size === 's') {
        return `mc-tag-link--s`;
    }

    return '';
}

export function getThemeModifier(theme: TTagTheme): string {
    if (theme === 'dark') {
        return `mc-tag-link--dark`;
    }

    return '';
}

const LinkTag: FC<ILinkTagProps> = ({ className, children, size = 'm', theme = 'light', ...props }) => (
    <a className={cn('mc-tag-link', getSizeModifier(size), getThemeModifier(theme), className)} {...props}>
        <span className="mc-tag-link__label">{children}</span>
    </a>
);

export default LinkTag;
