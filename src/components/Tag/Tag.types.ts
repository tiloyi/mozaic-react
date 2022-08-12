import { AnchorHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';

export const sizes = ['s', 'm'] as const;

export type TTagSize = typeof sizes[number];

export const themes = ['dark', 'light'] as const;

export type TTagTheme = typeof themes[number];

export interface IBasicTagProps {
    className?: string;
    theme?: TTagTheme;
    size?: TTagSize;
}

export interface ILinkTagProps extends AnchorHTMLAttributes<HTMLAnchorElement>, IBasicTagProps {}

export interface ITextTagProps extends HTMLAttributes<HTMLSpanElement>, IBasicTagProps {}

export interface IRemovableTagProps extends ITextTagProps {
    isDisabled?: boolean;
    onRemove?: () => void;
}

export interface ISelectableTagProps extends ITextTagProps {
    name?: string;
    isDisabled?: boolean;
    onChange?: () => void;
}
