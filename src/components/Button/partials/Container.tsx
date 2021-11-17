import React, { FC } from 'react';
import cn from 'classnames';
import { ButtonTheme, ButtonVariant, ButtonWidth, IButtonProps, TButtonSize } from '../Button.types';

const blockClassName = 'mc-button';

function getButtonModifier(theme: ButtonTheme, variant: ButtonVariant): string {
    const parts = [`${blockClassName}-`];

    parts.push(variant);

    if (theme !== ButtonTheme.Primary) {
        parts.push(theme);
    }

    return parts.join('-');
}

function getButtonSizeModifier(size: TButtonSize): string {
    return size !== 'm' ? `${blockClassName}--${size}` : '';
}

function getButtonWidthModifier(width: ButtonWidth): string {
    return width === ButtonWidth.Full ? `${blockClassName}--full` : '';
}

const ButtonContainer: FC<IButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.Primary,
    variant = ButtonVariant.Solid,
    size = 'm',
    width = ButtonWidth.Fit,
    isDisabled,
    ...props
}) => (
    // eslint-disable-next-line react/button-has-type
    <button
        {...props}
        className={cn(
            blockClassName,
            getButtonModifier(theme, variant),
            getButtonWidthModifier(width),
            getButtonSizeModifier(size),
            className
        )}
        disabled={isDisabled}
    >
        {children}
    </button>
);

export default ButtonContainer;
