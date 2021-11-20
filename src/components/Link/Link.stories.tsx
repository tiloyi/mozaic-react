import React from 'react';
import { Story } from '@storybook/react';
import { ILinkProps } from './Link.types';
import Link from './Link';

const Template: Story<ILinkProps> = args => <Link {...args}>Lorem ipsum</Link>;

export const Controls = Template.bind({});

Controls.args = {};

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
    }
};
