import { createElement, useMemo, FC } from 'react';
import cn from 'classnames';
import { IViewProps, TMagicUnit } from './View.types';
import './View.scss';

function sanitize(unit: TMagicUnit): string {
    return unit.replace(/^mu/, '');
}

function getSpacingClassNames(
    prefix: 'p' | 'm',
    spacing?: TMagicUnit,
    top?: TMagicUnit,
    right?: TMagicUnit,
    bottom?: TMagicUnit,
    left?: TMagicUnit
): Array<string> {
    if (spacing) {
        return [`mu-${prefix}-${sanitize(spacing)}`];
    }

    const classNames: Array<string> = [];

    if (top) {
        classNames.push(`mu-${prefix}t-${sanitize(top)}`);
    }

    if (right) {
        classNames.push(`mu-${prefix}r-${sanitize(right)}`);
    }

    if (bottom) {
        classNames.push(`mu-${prefix}b-${sanitize(bottom)}`);
    }

    if (left) {
        classNames.push(`mu-${prefix}l-${sanitize(left)}`);
    }

    return classNames;
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
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    ...props
}): JSX.Element => {
    const margins = useMemo(
        () => getSpacingClassNames('m', margin, marginTop, marginRight, marginBottom, marginLeft),
        [margin, marginTop, marginRight, marginBottom, marginLeft]
    );

    const paddings = useMemo(
        () => getSpacingClassNames('p', padding, paddingTop, paddingRight, paddingBottom, paddingLeft),
        [padding, paddingTop, paddingRight, paddingBottom, paddingLeft]
    );

    return createElement(as, { className: cn(className, ...margins, ...paddings), ...props }, children);
};

export default View;
