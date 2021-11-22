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

export function render(value: number, percents: number): string {
    return `${percents}%`;
}

const ProgressBar = ({
    className,
    value,
    minValue = 0,
    maxValue = 100,
    role = 'progressbar',
    size = 'm',
    theme = 'default',
    renderValue = render,
    withValue,
    ...props
}: IProgressBarProps): JSX.Element => {
    if (value < minValue) {
        /* eslint-disable no-console */
        console.error('The `value` property cannot be less than the `minValue` property');
        /* eslint-enable no-console */
    }

    if (value > maxValue) {
        /* eslint-disable no-console */
        console.error('The `value` property cannot be greater than the `maxValue` property');
        /* eslint-enable no-console */
    }

    if (minValue >= maxValue) {
        /* eslint-disable no-console */
        console.error('The `minValue` property must be less than the `maxValue` property');
        /* eslint-enable no-console */
    }

    const percents = Math.round(((value - minValue) / (maxValue - minValue)) * 100);

    const style = useMemo(() => {
        if (percents >= 100) {
            return { width: '100%' };
        }

        if (percents <= 0) {
            return { width: '0%' };
        }

        return { width: `${percents}%` };
    }, [percents]);

    const containerClassName = useMemo(
        () =>
            cn(
                blockClassName,
                className,
                getThemeModifier(theme),
                getSizeModifier(size),
                withValue && `${blockClassName}--percent`,
                withValue && percents >= 50 && `${blockClassName}--half`
            ),
        [theme, size, percents, className, withValue]
    );

    /* eslint-disable react/forbid-dom-props */
    return (
        <div className={containerClassName} {...props}>
            <div
                className={`${blockClassName}__indicator`}
                role={role}
                aria-valuemin={minValue}
                aria-valuenow={value}
                aria-valuemax={maxValue}
                style={style}
            >
                &nbsp;
            </div>
            <div className={`${blockClassName}__percentage`}>{renderValue(value, percents)}</div>
        </div>
    );
    /* eslint-enable react/forbid-dom-props */
};

export default ProgressBar;
