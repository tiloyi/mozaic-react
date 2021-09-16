import React from 'react';
import { Story } from '@storybook/react';
import Button, { IconButton } from '../Button';
import { ButtonSize, ButtonTheme, ButtonVariant, ButtonWidth, IButtonProps, IIconButtonProps } from './Button.types';

export const Icon = () => (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M11.74 12.03h.02-.02zM12 7a3 3 0 00-3 3 .75.75 0 001.5 0A1.5 1.5 0 0112 8.51a1.5 1.5 0 01.66 2.85 2.41 2.41 0 00-1.41 2.16v.25a.75.75 0 001.5 0v-.25a.91.91 0 01.57-.81A3 3 0 0012 7z" />
        <circle cx="12" cy="16.24" r=".75" />
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
    </svg>
);

const TextButtonTemplate: Story<IButtonProps> = args => <Button {...args}>Click!</Button>;

export const TextButton = TextButtonTemplate.bind({});

TextButton.args = {
    size: ButtonSize.M,
    variant: ButtonVariant.Solid,
    theme: ButtonTheme.Neutral,
    width: ButtonWidth.Fit
};

TextButton.argTypes = {
    leftIcon: {
        table: {
            disable: true
        }
    },
    rightIcon: {
        table: {
            disable: true
        }
    }
};

const IconOnlyTemplate: Story<IIconButtonProps> = args => (
    <IconButton {...args}>
        <Icon />
    </IconButton>
);

export const IconOnly = IconOnlyTemplate.bind({});

IconOnly.args = {
    size: ButtonSize.M,
    variant: ButtonVariant.Solid,
    theme: ButtonTheme.Danger
};

IconOnly.argTypes = {
    leftIcon: {
        table: {
            disable: true
        }
    },
    rightIcon: {
        table: {
            disable: true
        }
    },
    width: {
        table: {
            disable: true
        }
    }
};

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            control: {
                type: 'select'
            }
        },
        variant: {
            control: {
                type: 'select'
            }
        },
        theme: {
            control: {
                type: 'select'
            }
        },
        width: {
            control: {
                type: 'select'
            }
        }
    }
};
