import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from '../Radio';
import RadioGroup from './RadioGroup';
import { IRadioGroupProps } from './RadioGroup.types';
import { languages } from './RadioGroup.fixtures';
import './RadioGroup.stories.scss';

const ControlsTemplate: Story<IRadioGroupProps> = args => (
    <RadioGroup {...args} onChange={action('Change')}>
        {languages.map(language => (
            <Radio className="radio-group-item" key={language.toLowerCase()} value={language.toLowerCase()}>
                {language}
            </Radio>
        ))}
    </RadioGroup>
);

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    name: 'languages',
    value: languages[0].toLowerCase()
};

const ExampleTemplate: Story = () => {
    const [language, setLanguage] = useState(languages[0].toLowerCase());

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setLanguage(event.target.value);

    return (
        <RadioGroup name="languages" value={language} onChange={handleChange}>
            {languages.map(language => (
                <Radio className="radio-group-item" key={language.toLowerCase()} value={language.toLowerCase()}>
                    {language}
                </Radio>
            ))}
        </RadioGroup>
    );
};

export const Example = ExampleTemplate.bind({});

Example.argTypes = {
    name: {
        table: {
            disable: true
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
