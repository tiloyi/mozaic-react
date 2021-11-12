import React from 'react';
import { Story } from '@storybook/react';
import Flag from './Flag';
import { FlagTheme, FlagVariant, IFlagProps } from './Flag.types';

const Template: Story<IFlagProps> = args => <Flag {...args}>Flag</Flag>;

export const FlagStory = Template.bind({});

FlagStory.args = {
    theme: FlagTheme.Primary,
    variant: FlagVariant.Solid
};

FlagStory.storyName = 'Flag';

export default {
    title: 'Components/Flag',
    component: Flag,
    argTypes: {
        theme: {
            control: {
                type: 'select'
            }
        },
        variant: {
            control: {
                type: 'select'
            }
        }
    }
};
