import React, { FC, useCallback, useRef } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
import { ISelectableTagProps, TTagSize, TTagTheme } from './Tag.types';
import './Tag.scss';

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

const SelectableTag: FC<ISelectableTagProps> = ({
    className,
    children,
    size = 'm',
    theme = 'light',
    name,
    isDisabled,
    onChange,
    ...props
}) => {
    const nameRef = useRef(name ?? nanoid());

    const handleChange = useCallback(() => onChange?.(), [onChange]);

    return (
        <span className={cn('mc-tag-selectable', getSizeModifier(size), getThemeModifier(theme), className)} {...props}>
            <input
                className="mc-tag-selectable__input"
                type="checkbox"
                id={nameRef.current}
                name={name}
                disabled={isDisabled}
                onChange={handleChange}
            />
            <label className="mc-tag-selectable__pill" htmlFor={nameRef.current}>
                <span className="mc-tag-selectable__label">{children}</span>
            </label>
        </span>
    );
};

export default SelectableTag;
