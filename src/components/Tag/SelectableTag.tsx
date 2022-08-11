import React, { FC } from 'react';
import cn from 'classnames';
import { ISelectableTagProps, TTagSize, TTagTheme } from './Tag.types';

export function getSizeModifier(size: TTagSize): string {
    if (size === 's') {
        return `mc-tag-selectable--s`;
    }

    return '';
}

export function getThemeModifier(theme: TTagTheme): string {
    if (theme === 'dark') {
        return `mc-tag-selectable--dark`;
    }

    return '';
}

const SelectableTag: FC<ISelectableTagProps> = ({ className, children, size = 'm', theme = 'light', ...props }) => {
    return (
        <span className={cn('mc-tag-selectable', getSizeModifier(size), getThemeModifier(theme), className)} {...props}>
            <input className="mc-tag-selectable__input" type="checkbox" name="" id="selectable" />
            <label className="mc-tag-selectable__pill" htmlFor="selectable">
                <span className="mc-tag-selectable__label">{children}</span>
            </label>
        </span>
    );
};

export default SelectableTag;
