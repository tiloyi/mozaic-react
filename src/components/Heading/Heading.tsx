import React, { createElement, FC } from 'react';
import cn from 'classnames';
import { HeadingSize, HeadingWeight, IHeadingProps } from './Heading.types';
import './Heading.scss';

const blockClassName = 'mt-heading';

const Heading: FC<IHeadingProps> = ({
    className,
    children,
    as = 'h2',
    align,
    size = HeadingSize.M,
    weight = HeadingWeight.Regular,
    ...props
}): JSX.Element => {
    const elementClassName = cn(
        blockClassName,
        className,
        align && `${blockClassName}--${align}`,
        size && `${blockClassName}--${size}`,
        weight && `${blockClassName}--${weight}`
    );

    return createElement(as, { className: elementClassName, ...props }, children);
};

export default Heading;
