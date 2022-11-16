import React from 'react';
import { Story } from '@storybook/react';
import Flex from '../Flex';
import { Text } from '../Text';
import { IOptionCardProps } from './OptionCard.types';
import OptionCard from './OptionCard';
import './OptionCard.stories.scss';

const ControlsTemplate: Story<IOptionCardProps> = args => (
    <Flex>
        <OptionCard className="story-option-card" {...args}>
            <Text>Option card</Text>
        </OptionCard>
    </Flex>
);

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    isChecked: false,
    isDisabled: false,
    type: 'radio',
    indicatorPosition: 'top-right'
};

export const argTypes = {
    indicatorPosition: {
        control: {
            type: 'select'
        }
    },
    padding: {
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
    onChange: {
        table: {
            disable: true
        }
    }
};
