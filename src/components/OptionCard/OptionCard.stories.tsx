import React from 'react';
import { Story } from '@storybook/react';
import { IOptionCardContainer } from './OptionCard.types';
import OptionCard from './OptionCard';
import './OptionCard.stories.scss';
import { Flex, View } from '../index';

const ControlsTemplate: Story<IOptionCardContainer> = args => (
    <Flex>
        <OptionCard className="story-option-card" {...args}>
            <View padding="mu100">Option card</View>
        </OptionCard>
    </Flex>
);

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    isChecked: false,
    type: 'radio',
    indicatorPosition: 'center'
};

export const argTypes = {
    type: {
        control: {
            type: 'select'
        }
    },
    isChecked: {
        control: {
            type: 'select'
        }
    }
};
