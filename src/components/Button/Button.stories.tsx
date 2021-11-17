import React from 'react';
import { Story } from '@storybook/react';
import Button from './Button';
import IconButton from './IconButton';
import { ButtonTheme, ButtonVariant, ButtonWidth, IButtonProps, IIconButtonProps } from './Button.types';

const Icon = (): JSX.Element => (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M11.74 12.03h.02-.02zM12 7a3 3 0 00-3 3 .75.75 0 001.5 0A1.5 1.5 0 0112 8.51a1.5 1.5 0 01.66 2.85 2.41 2.41 0 00-1.41 2.16v.25a.75.75 0 001.5 0v-.25a.91.91 0 01.57-.81A3 3 0 0012 7z" />
        <circle cx="12" cy="16.24" r=".75" />
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
    </svg>
);

const TextTemplate: Story<IButtonProps> = args => <Button {...args}>Click!</Button>;

export const Text = TextTemplate.bind({});

Text.args = {
    size: 'm',
    variant: ButtonVariant.Solid,
    theme: ButtonTheme.Primary02,
    width: ButtonWidth.Fit
};

const WithLeftIconTemplate: Story<IButtonProps> = args => (
    <Button {...args} leftIcon={<Icon />}>
        Click!
    </Button>
);

export const WithLeftIcon = WithLeftIconTemplate.bind({});

WithLeftIcon.args = {
    size: 'm',
    variant: ButtonVariant.Solid,
    theme: ButtonTheme.Neutral,
    width: ButtonWidth.Fit
};

const WithRightIconTemplate: Story<IButtonProps> = args => (
    <Button {...args} rightIcon={<Icon />}>
        Click!
    </Button>
);

export const WithRightIcon = WithRightIconTemplate.bind({});

WithRightIcon.args = {
    size: 'm',
    variant: ButtonVariant.Solid,
    theme: ButtonTheme.Neutral,
    width: ButtonWidth.Fit
};

const IconOnlyTemplate: Story<IIconButtonProps> = args => (
    <IconButton {...args}>
        <Icon />
    </IconButton>
);

export const IconOnly = IconOnlyTemplate.bind({});

IconOnly.args = {
    size: 'm',
    variant: ButtonVariant.Solid,
    theme: ButtonTheme.Danger
};

IconOnly.argTypes = {
    width: {
        table: {
            disable: true
        }
    }
};

export const argTypes = {
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
    },
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
