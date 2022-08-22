import React, { FC } from 'react';
import cn from 'classnames';
import { ITextTagProps, TTagSize, TTagTheme } from './Tag.types';
import './Tag.scss';

export function getSizeModifier(size: TTagSize): string {
    if (size === 's') {
        return `mc-tag-text--s`;
    }

    return '';
}

export function getThemeModifier(theme: TTagTheme): string {
    if (theme === 'dark') {
        return `mc-tag-text--dark`;
    }

    return '';
}

const TextTag: FC<ITextTagProps> = ({ className, children, size = 'm', theme = 'light', ...props }) => (
    <span className={cn('mc-tag-text', getSizeModifier(size), getThemeModifier(theme), className)} {...props}>
        <span className="mc-tag-text__label">{children}</span>
    </span>
);

export default TextTag;
