import { FC, createElement } from 'react';
import cn from 'classnames';
import { ITextProps, TextSize } from './Text.types';
import './Text.scss';

const blockClassName = 'mt-text';

const Text: FC<ITextProps> = ({
    className,
    children,
    as = 'span',
    align,
    theme,
    size = TextSize.M,
    weight,
    ...props
}) => {
    const elementClassName = cn(
        blockClassName,
        className,
        align && `${blockClassName}--${align}`,
        `${blockClassName}--${size}`,
        theme && `${blockClassName}--${theme}`,
        weight && `${blockClassName}--${weight}`
    );

    return createElement(as, { className: elementClassName, ...props }, children);
};

export default Text;
