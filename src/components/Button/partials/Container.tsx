import React, { FC } from 'react';
import cn from 'classnames';
import { IButtonProps, TButtonSize, TButtonTheme, TButtonVariant, TButtonWidth } from '../Button.types';

const blockClassName = 'mc-button';

function getButtonModifier(theme: TButtonTheme, variant: TButtonVariant): string {
    const parts = [`${blockClassName}-`];

    parts.push(variant);

    if (theme !== 'primary') {
        parts.push(theme);
    }

    return parts.join('-');
}

function getButtonSizeModifier(size: TButtonSize): string {
    return size !== 'm' ? `${blockClassName}--${size}` : '';
}

function getButtonWidthModifier(width: TButtonWidth): string {
    return width === 'full' ? `${blockClassName}--full` : '';
}

const ButtonContainer: FC<IButtonProps> = ({
    className,
    children,
    theme = 'primary',
    variant = 'solid',
    size = 'm',
    width = 'fit',
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
