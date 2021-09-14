import React, { FC } from 'react';
import { ButtonShape, ButtonSize, ButtonTheme, ButtonVariant, IButtonProps } from './Button.types';
import './Button.scss';

const blockClassName = 'mc-button';

function getButtonModifier(theme: ButtonTheme, variant: ButtonVariant): string {
    const parts = [`${blockClassName}-`];

    parts.push(variant);

    if (theme !== ButtonTheme.Primary) {
        parts.push(theme);
    }

    return parts.join('-');
}

const Button: FC<IButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.Primary,
    variant = ButtonVariant.Solid,
    size = ButtonSize.M,
    shape = ButtonShape.Fit,
    ...props
}) => {
    return (
        <button className="mc-button" {...props}>
            {children}
        </button>
    );
};

export default Button;
