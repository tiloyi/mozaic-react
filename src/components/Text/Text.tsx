import React, { FC, createElement } from 'react';
import cn from 'classnames';
import { ITextProps, TextSize } from './Text.types';
import './Text.scss';

const Text: FC<ITextProps> = ({ className, children, as = 'span', align, theme, size = TextSize.M, ...props }) => {
    const elementClassName = cn(
        className,
        align && `mt-text--${align}`,
        size && `mt-text--${size}`,
        theme && `mt-text--${theme}`
    );

    return createElement(as, { className: elementClassName, ...props }, children);
};

export default Text;
