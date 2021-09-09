import React from 'react';
import { Story } from '@storybook/react';
import Radio from '../Radio';
import RadioGroup from './RadioGroup';
import { IRadioGroupProps } from './RadioGroup.types';
import './RadioGroup.stories.scss';

const languages = ['Kotlin', 'Rust', 'Go', 'Ruby', 'PHP', 'Java'];

const Template: Story<IRadioGroupProps> = args => (
    <RadioGroup {...args}>
        {languages.map(language => (
            <Radio className="radio-group-item" value={language.toLowerCase()}>
                {language}
            </Radio>
        ))}
    </RadioGroup>
);

export const RadioGroupStory = Template.bind({});

RadioGroupStory.args = {
    name: 'languages',
    value: languages[0].toLowerCase()
};

RadioGroupStory.storyName = 'RadioGroup';

export default {
    title: 'RadioGroup',
    component: RadioGroup,
    argTypes: {
        value: {
            control: {
                type: 'select'
            },
            options: languages.map(l => l.toLowerCase())
        }
    }
};
