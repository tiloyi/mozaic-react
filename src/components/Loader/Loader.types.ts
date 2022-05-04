export const sizes = ['s', 'l', 'm'] as const;

export type TLoaderSize = typeof sizes[number];

export const combiningSizeWithProps: Record<TLoaderSize, { radius: string, viewBox: string }> = {
    s: {
        radius: '6',
        viewBox: '0 0 24 24'
    },
    m: {
        radius: '9',
        viewBox: '0 0 32 32'
    },
    l: {
        radius: '19',
        viewBox: '0 0 64 64'
    }
};

export const themes = ['light', 'dark', 'primary'] as const;

export type TLoaderThemes = typeof themes[number];

export interface ILoaderProps {
    className?: string;
    size?: TLoaderSize;
    themes?: TLoaderThemes;
}
