
export const types = ['text', 'removable', 'selectable', 'link'] as const;
export const themes = ['dark'] as const;
export const sizes = ['s', 'm'] as const;

export type TTagType = typeof types[number];
export type TTagTheme = typeof themes[number];
export type TTagSize = typeof sizes[number];

export interface ITagProps {
    className?: string;
    type?: TTagType;
    theme?: TTagTheme;
    size?: TTagSize;
    onClose?: () => void
}