import React from 'react';
import { Story } from '@storybook/react';
import { IFlexProps } from './Flex.types';
import Flex from './Flex';
import './Flex.stories.scss';

const Template: Story<IFlexProps> = args => (
    <Flex {...args} className="flex-container">
        <div className="flex-inner">1</div>
        <div className="flex-inner">2</div>
    </Flex>
);

export const FlexStory = Template.bind({});

FlexStory.args = {};

export default {
    title: 'Utilities/Flex',
    component: Flex,
    argTypes: {}
};
