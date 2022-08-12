import {AnchorHTMLAttributes, HTMLAttributes, InputHTMLAttributes} from 'react';

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

export interface IRemovableTagProps extends HTMLAttributes<HTMLSpanElement>, IBasicTagProps {
    onRemove?: () => void;
}

export interface ISelectableTagProps extends IBasicTagProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'size'> {
    isDisabled?: boolean;
    onChange?: () => void;
}

export interface ITextTagProps extends HTMLAttributes<HTMLSpanElement>, IBasicTagProps {}
