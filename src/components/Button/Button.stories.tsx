import React from 'react';
import { Story } from '@storybook/react';
import Button, { IconButton } from '../Button';
import { ButtonSize, ButtonTheme, ButtonVariant, ButtonWidth, IButtonProps, IIconButtonProps } from './Button.types';

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

const IconOnlyTemplate: Story<IIconButtonProps> = args => <IconButton {...args}>C</IconButton>;

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
