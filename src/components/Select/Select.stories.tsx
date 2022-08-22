import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import { languages, food } from './Select.fixtures';
import { ISelectProps } from './Select.types';
import Select from './Select';

const ControlsTemplate: Story<ISelectProps> = args => <Select {...args} options={languages} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    placeholder: 'Select an language',
    defaultValue: 'ruby',
    size: 'm',
    name: 'language',
    isInvalid: false,
    isValid: false,
    isDisabled: false
};

Controls.argTypes = {
    value: {
        control: {
            type: 'select',
            options: languages.map(o => o.value)
        }
    }
};

const ExampleTemplate: Story<ISelectProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => setValue(event.target.value);

    return <Select {...args} options={languages} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'Select an language',
    size: 'm',
    isInvalid: false,
    isValid: false,
    isDisabled: false
};

Example.argTypes = {
    value: {
        table: {
            disable: true
        }
    }
};

const GroupsTemplate: Story<ISelectProps> = args => <Select {...args} options={food} />;

export const Groups = GroupsTemplate.bind({});

Groups.args = {
    placeholder: 'Select an food',
    defaultValue: 'apple',
    size: 'm',
    isInvalid: false,
    isValid: false,
    isDisabled: false
};

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    },
    options: {
        table: {
            disable: true
        }
    }
};
