import React from 'react';
import { Story } from '@storybook/react';
import Flex from '../Flex';
import View from '../View';
import { IOptionCard } from './OptionCard.types';
import OptionCard from './OptionCard';
import './OptionCard.stories.scss';

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
    indicatorPosition: {
        control: {
            type: 'select'
        }
    },
    type: {
        control: {
            type: 'select'
        }
    },
    value: {
        table: {
            disable: true
        }
    },
    onClick: {
        table: {
            disable: true
        }
    }
};
