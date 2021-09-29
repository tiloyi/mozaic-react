import React from 'react';
import { Story } from '@storybook/react';
import { HeadingSize, IHeadingProps } from './Heading.types';
import Heading from './Heading';

const Template: Story<IHeadingProps> = args => <Heading {...args}>The quick brown fox jumps over the lazy dog</Heading>;

export const Controls = Template.bind({});

Controls.args = {
    as: 'h2',
    size: HeadingSize.M
};

export default {
    title: 'Heading',
    component: Heading,
    argTypes: {
        size: {
            control: {
                type: 'select'
            }
        },
        align: {
            control: {
                type: 'select'
            }
        }
    }
};
