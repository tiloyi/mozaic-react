import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RatingStarsResult from './RatingStarsResult';
import RatingStarsInput from './RatingStarsInput';
import { IRatingStarInputProps, IRatingStarsResultProps } from './RatingStars.types';

const ResultTemplate: Story<IRatingStarsResultProps> = args => <RatingStarsResult {...args} />;

export const Result = ResultTemplate.bind({});

Result.args = {
    size: 's'
};

const InputTemplate: Story<IRatingStarInputProps> = args => <RatingStarsInput {...args} />;

export const Input = InputTemplate.bind({});

Input.args = {
    name: 'rating',
    handleChange: action('Change!')
};

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    }
};
