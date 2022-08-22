import React, { useState } from 'react';
import { Story } from '@storybook/react';
import RatingStarsResult from './RatingStarsResult';
import RatingStarsInput from './RatingStarsInput';
import { IRatingStarsResultProps, TRatingStarsScore } from './RatingStars.types';

const ResultTemplate: Story<IRatingStarsResultProps> = args => <RatingStarsResult {...args} />;

export const Result = ResultTemplate.bind({});

Result.args = {
    size: 'm',
    score: 50
};

const InputTemplate: Story = () => {
    const [score, setScore] = useState<TRatingStarsScore>(40);

    return <RatingStarsInput score={score} size="m" name="rating" onChange={nextScore => setScore(nextScore)} />;
};

export const Input = InputTemplate.bind({});

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    },
    score: {
        control: {
            type: 'select'
        }
    }
};
