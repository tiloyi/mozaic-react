import React from 'react';
import { Story } from '@storybook/react';
import { IOptionCard } from './OptionCard.types';
import OptionCard from './OptionCard';
import './OptionCard.stories.scss';
import { Flex, View } from '../index';

const ControlsTemplate: Story<IOptionCard> = args => (
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
    indicatorPosition: 'top-right'
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
