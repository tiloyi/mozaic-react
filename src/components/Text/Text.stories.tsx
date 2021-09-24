import React from 'react';
import { Story } from '@storybook/react';
import Text from './Text';
import { ITextProps, TextSize, TextTheme } from './Text.types';

const Template: Story<ITextProps> = args => <Text {...args}>Lorem ipsum dolor sit amet</Text>;

export const TextStory = Template.bind({});

TextStory.args = {
    as: 'p',
    theme: TextTheme.Primary01,
    size: TextSize.M
};

TextStory.storyName = 'Text';

export default {
    title: 'Text',
    component: Text,
    argTypes: {
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
        align: {
            control: {
                type: 'select'
            }
        }
    }
};
