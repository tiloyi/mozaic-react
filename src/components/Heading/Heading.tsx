import { createElement, FC } from 'react';
import cn from 'classnames';
import { IHeadingProps } from './Heading.types';
import './Heading.scss';

const blockClassName = 'mt-heading';

const Heading: FC<IHeadingProps> = ({
    className,
    children,
    as = 'h2',
    textAlign,
    size = 'm',
    weight = 'regular',
    underline,
    ...props
}): JSX.Element => {
    const elementClassName = cn(
        blockClassName,
        className,
        textAlign && `${blockClassName}--${textAlign}`,
        `${blockClassName}--${size}`,
        `${blockClassName}--${weight}`,
        underline && `${blockClassName}--underline`,
        underline && underline !== 'primary-01-500' && `${blockClassName}--line-${underline}`
    );

    return createElement(as, { className: elementClassName, ...props }, children);
};

export default Heading;
