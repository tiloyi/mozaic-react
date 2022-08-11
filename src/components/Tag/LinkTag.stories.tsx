import React from 'react';
import { Story } from '@storybook/react';
import LinkTag from './LinkTag';
import { ILinkTagProps } from './Tag.types';

export const Template: Story<ILinkTagProps> = args => <LinkTag {...args}>tag</LinkTag>;

export const Controls = Template.bind({});

Controls.args = {
    size: 'm',
    theme: 'light',
    href: 'https://google.com',
    target: '_blank'
};

export const argTypes = {
    theme: {
        control: {
            type: 'select'
        }
    },
    size: {
        control: {
            type: 'select'
        }
    },
    target: {
        table: {
            disable: true
        }
    }
};
