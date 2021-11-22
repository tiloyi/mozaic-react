import { FC, createElement } from 'react';
import cn from 'classnames';
import { ITextProps } from './Text.types';
import './Text.scss';

const blockClassName = 'mt-text';

const Text: FC<ITextProps> = ({ className, children, as = 'span', textAlign, theme, size = 'm', weight, ...props }) => {
    const elementClassName = cn(
        blockClassName,
        className,
        textAlign && `${blockClassName}--${textAlign}`,
        `${blockClassName}--${size}`,
        theme && `${blockClassName}--color-${theme}`,
        weight && `${blockClassName}--${weight}`
    );

    return createElement(as, { className: elementClassName, ...props }, children);
};

export default Text;
