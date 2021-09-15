import React, { FC } from 'react';
import cn from 'classnames';
import { ButtonSize, ButtonTheme, ButtonVariant, ButtonWidth, IButtonProps } from '../Button.types';

const blockClassName = 'mc-button';

function getButtonModifier(theme: ButtonTheme, variant: ButtonVariant): string {
    const parts = [`${blockClassName}-`];

    parts.push(variant);

    if (theme !== ButtonTheme.Primary) {
        parts.push(theme);
    }

    return parts.join('-');
}

function getButtonSizeModifier(size: ButtonSize): string {
    return size !== ButtonSize.M ? `${blockClassName}--${size}` : '';
}

function getButtonWidthModifier(width: ButtonWidth): string {
    return width === ButtonWidth.Full ? `${blockClassName}--full` : '';
}

const ButtonContainer: FC<IButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.Primary,
    variant = ButtonVariant.Solid,
    size = ButtonSize.M,
    width = ButtonWidth.Fit,
    ...props
}) => (
    <button
        className={cn(
            blockClassName,
            getButtonModifier(theme, variant),
            getButtonWidthModifier(width),
            getButtonSizeModifier(size),
            className
        )}
        {...props}
    >
        {children}
    </button>
);

export default ButtonContainer;
