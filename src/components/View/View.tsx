import { createElement, useMemo, FC } from 'react';
import cn from 'classnames';
import { MagicUnit } from '../../constants';
import { IViewProps } from './View.types';
import './View.scss';

function getSpacingClassNames(
    prefix: 'p' | 'm',
    spacing?: MagicUnit,
    top?: MagicUnit,
    right?: MagicUnit,
    bottom?: MagicUnit,
    left?: MagicUnit
): Array<string> {
    if (spacing) {
        return [`mu-${prefix}-${spacing}`];
    }

    const classNames: Array<string> = [];

    if (top) {
        classNames.push(`mu-${prefix}t-${top}`);
    }

    if (right) {
        classNames.push(`mu-${prefix}r-${right}`);
    }

    if (bottom) {
        classNames.push(`mu-${prefix}b-${bottom}`);
    }

    if (left) {
        classNames.push(`mu-${prefix}l-${left}`);
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
