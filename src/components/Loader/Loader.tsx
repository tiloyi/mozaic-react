import React from 'react';
import cn from 'classnames';
import View from '../View';
import { ILoaderProps, ILoaderSvgProperties, TLoaderSize, TLoaderTheme } from './Loader.types';
import './Loader.scss';

const blockClassName = 'mc-loader';

export function getThemeModifier(theme: TLoaderTheme): string {
    return `${blockClassName}--${theme}`;
}

export function getSizeModifier(size: TLoaderSize): string {
    return `${blockClassName}--${size}`;
}

export function getSvgProperties(size: TLoaderSize): ILoaderSvgProperties {
    const properties: Record<TLoaderSize, ILoaderSvgProperties> = {
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

    return properties[size];
}

const Loader = ({ className, theme = 'primary', size = 'm', ...props }: ILoaderProps): JSX.Element => {
    const { viewBox, radius } = getSvgProperties(size);

    return (
        <View
            className={cn(blockClassName, className, getThemeModifier(theme), getSizeModifier(size))}
            {...props}
            role="progressbar"
        >
            <span className="mc-loader__spinner">
                <svg className="mc-loader__icon" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
                    <circle className="mc-loader__path" cx="50%" cy="50%" r={radius} />
                </svg>
            </span>
        </View>
    );
};

export default Loader;
