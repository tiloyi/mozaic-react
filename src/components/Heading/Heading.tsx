import React, { createElement, FC } from 'react';
import cn from 'classnames';
import { HeadingSize, IHeadingProps } from './Heading.types';
import './Heading.scss';

const blockClassName = 'mt-heading';

const Heading: FC<IHeadingProps> = ({
    className,
    children,
    as = 'h2',
    align,
    size = HeadingSize.M,
    ...props
}): JSX.Element => {
    const elementClassName = cn(
        blockClassName,
        className,
        align && `${blockClassName}--${align}`,
        size && `${blockClassName}--${size}`
    );

    return createElement(as, { className: elementClassName, ...props }, children);
};

export default Heading;
