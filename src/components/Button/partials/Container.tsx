import React, { FC } from 'react';
import { ButtonWidth, ButtonSize, ButtonTheme, ButtonVariant, IButtonProps } from '../Button.types';
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

const ButtonContainer: FC<IButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.Primary,
    variant = ButtonVariant.Solid,
    size = ButtonSize.M,
    width = ButtonWidth.Fit,
    ...props
}) => {
    return (
        <button className="mc-button" {...props}>
            {children}
        </button>
    );
};

export default ButtonContainer;
