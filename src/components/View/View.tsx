import { createElement, useMemo, FC } from 'react';
import cn from 'classnames';
import { IViewProps, TMagicUnit, TRadius, TShadow } from './View.types';
import './View.scss';

export function sanitize(unit: TMagicUnit): string {
    return unit.replace(/^mu/, '');
}

function getVerticalSpacingClassNames(
    prefix: 'p' | 'm',
    top?: TMagicUnit,
    bottom?: TMagicUnit,
    vertical?: TMagicUnit
): Array<string> {
    if (vertical) {
        return [`mu-${prefix}v-${sanitize(vertical)}`];
    }

    if (top === bottom && top !== undefined) {
        return [`mu-${prefix}v-${sanitize(top)}`];
    }

    const classNames: Array<string> = [];

    if (top) {
        classNames.push(`mu-${prefix}t-${sanitize(top)}`);
    }

    if (bottom) {
        classNames.push(`mu-${prefix}b-${sanitize(bottom)}`);
    }

    return classNames;
}

function getHorizontalSpacingClassNames(
    prefix: 'p' | 'm',
    right?: TMagicUnit,
    left?: TMagicUnit,
    horizontal?: TMagicUnit
): Array<string> {
    if (horizontal) {
        return [`mu-${prefix}h-${sanitize(horizontal)}`];
    }

    if (right === left && right !== undefined) {
        return [`mu-${prefix}h-${sanitize(right)}`];
    }

    const classNames: Array<string> = [];

    if (right) {
        classNames.push(`mu-${prefix}r-${sanitize(right)}`);
    }

    if (left) {
        classNames.push(`mu-${prefix}l-${sanitize(left)}`);
    }

    return classNames;
}

function getSpacingClassNames(
    prefix: 'p' | 'm',
    spacing?: TMagicUnit,
    top?: TMagicUnit,
    right?: TMagicUnit,
    bottom?: TMagicUnit,
    left?: TMagicUnit,
    vertical?: TMagicUnit,
    horizontal?: TMagicUnit
): Array<string> {
    if (spacing) {
        return [`mu-${prefix}-${sanitize(spacing)}`];
    }

    if (vertical === horizontal && vertical !== undefined) {
        return [`mu-${prefix}-${sanitize(vertical)}`];
    }

    if (top === right && right === bottom && bottom === left && left !== undefined) {
        return [`mu-${prefix}-${sanitize(left)}`];
    }

    return [
        ...getVerticalSpacingClassNames(prefix, top, bottom, vertical),
        ...getHorizontalSpacingClassNames(prefix, right, left, horizontal)
    ];
}

function getShadowModifier(shadow?: TShadow): string {
    if (shadow) {
        return `mt-shadow-${shadow}`;
    }

    return '';
}

function getRadiusModifier(radius?: TRadius): string {
    if (radius) {
        return `mt-radius-${radius}`;
    }

    return '';
}

const View: FC<IViewProps> = ({
    className,
    as = 'div',
    children,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginVertical,
    marginHorizontal,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingVertical,
    paddingHorizontal,
    shadow,
    radius,
    ...props
}): JSX.Element => {
    const margins = useMemo(
        () =>
            getSpacingClassNames(
                'm',
                margin,
                marginTop,
                marginRight,
                marginBottom,
                marginLeft,
                marginVertical,
                marginHorizontal
            ),
        [margin, marginTop, marginRight, marginBottom, marginLeft, marginVertical, marginHorizontal]
    );

    const paddings = useMemo(
        () =>
            getSpacingClassNames(
                'p',
                padding,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                paddingVertical,
                paddingHorizontal
            ),
        [padding, paddingTop, paddingRight, paddingBottom, paddingLeft, paddingVertical, paddingHorizontal]
    );

    return createElement(
        as,
        {
            className: cn(className, ...margins, ...paddings, getShadowModifier(shadow), getRadiusModifier(radius)),
            ...props
        },
        children
    );
};

export default View;
