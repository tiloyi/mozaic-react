import React from 'react';
import { Story } from '@storybook/react';
import Button from './Button';
import IconButton from './IconButton';
import { IButtonProps, IIconButtonProps } from './Button.types';
import SVGIcon from '../../../.storybook/assets/SVGIcon';

const TextTemplate: Story<IButtonProps> = args => <Button {...args}>Click!</Button>;

export const Text = TextTemplate.bind({});

Text.args = {
    size: 'm',
    variant: 'solid',
    theme: 'primary-02',
    width: 'fit'
};

const WithLeftIconTemplate: Story<IButtonProps> = args => (
    <Button {...args} leftIcon={<SVGIcon />}>
        Click!
    </Button>
);

export const WithLeftIcon = WithLeftIconTemplate.bind({});

WithLeftIcon.args = {
    size: 'm',
    variant: 'solid',
    theme: 'neutral',
    width: 'fit'
};

const WithRightIconTemplate: Story<IButtonProps> = args => (
    <Button {...args} rightIcon={<SVGIcon />}>
        Click!
    </Button>
);

export const WithRightIcon = WithRightIconTemplate.bind({});

WithRightIcon.args = {
    size: 'm',
    variant: 'solid',
    theme: 'neutral',
    width: 'fit'
};

const IconOnlyTemplate: Story<IIconButtonProps> = args => (
    <IconButton {...args}>
        <SVGIcon />
    </IconButton>
);

export const IconOnly = IconOnlyTemplate.bind({});

IconOnly.args = {
    size: 'm',
    variant: 'solid',
    theme: 'danger'
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
