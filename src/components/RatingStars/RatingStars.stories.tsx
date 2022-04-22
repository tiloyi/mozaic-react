import React from 'react';
import { Story } from '@storybook/react';
import RatingStars from './RatingStars';
import { IRatingStarsProps } from './RatingStars.types';

const ResultTemplate: Story<IRatingStarsProps> = args => <RatingStars {...args} />;

export const ResultControls = ResultTemplate.bind({});

ResultControls.args = {
    type: 'result'
};

const InputTemplate: Story<IRatingStarsProps> = args => <RatingStars {...args} />;

export const InputControls = InputTemplate.bind({});

InputControls.args = {
    type: 'input',
    name: 'inputControl'
};
