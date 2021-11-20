import React, { useMemo } from 'react';
import cn from 'classnames';
import { IProgressBarProps, TProgressBarSize, TProgressBarTheme } from './ProgressBar.types';
import './ProgressBar.scss';

const blockClassName = 'mc-progressbar';

export function getThemeModifier(theme?: TProgressBarTheme): string {
    if (theme && theme !== 'default') {
        return `${blockClassName}--${theme}`;
    }

    return '';
}

export function getSizeModifier(size?: TProgressBarSize): string {
    if (size && size !== 'm') {
        return `${blockClassName}--${size}`;
    }

    return '';
}

export function render(value: number): string {
    return `${value}%`;
}

const ProgressBar = ({
    className,
    value,
    role = 'progressbar',
    size = 'm',
    theme = 'default',
    renderValue = render,
    withValue,
    ...props
}: IProgressBarProps): JSX.Element => {
    const style = useMemo(
        () => ({
            width: `${value}%`
        }),
        [value]
    );

    const containerClassName = useMemo(
        () =>
            cn(
                blockClassName,
                className,
                getThemeModifier(theme),
                getSizeModifier(size),
                withValue && `${blockClassName}--percent`,
                withValue && value > 50 && `${blockClassName}--half`
            ),
        [theme, size, value, withValue]
    );

    return (
        <div className={containerClassName} {...props}>
            <div
                className={`${blockClassName}__indicator`}
                role={role}
                aria-valuemin={0}
                aria-valuenow={value}
                aria-valuemax={100}
                style={style}
            >
                &nbsp;
            </div>
            <div className={`${blockClassName}__percentage`}>{renderValue(value)}</div>
        </div>
    );
};

export default ProgressBar;
