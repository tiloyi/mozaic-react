import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import { IRemovableTagProps, TTagSize, TTagTheme } from './Tag.types';
import './Tag.scss';

export function getSizeModifier(size: TTagSize): string {
    if (size === 's') {
        return `mc-tag-removable--s`;
    }

    return '';
}

export function getThemeModifier(theme: TTagTheme): string {
    if (theme === 'dark') {
        return `mc-tag-removable--dark`;
    }

    return '';
}

const RemovableTag: FC<IRemovableTagProps> = ({
    className,
    children,
    size = 'm',
    theme = 'light',
    onRemove,
    ...props
}) => {
    const handleRemove = useCallback(() => onRemove?.(), [onRemove]);

    return (
        <span className={cn('mc-tag-removable', getSizeModifier(size), getThemeModifier(theme), className)} {...props}>
            <span className="mc-tag-removable__label">{children}</span>
            <button type="button" className="mc-tag-removable__remove" onClick={handleRemove}>
                <span className="mc-tag-removable__remove-text">Delete tag</span>
            </button>
        </span>
    );
};

export default RemovableTag;
