import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import { options } from './Select.fixtures';
import { ISelectProps, SelectSize } from './Select.types';
import Select from './Select';

const ControlsTemplate: Story<ISelectProps> = args => <Select {...args} options={options} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    placeholder: 'Select an language',
    value: 'ruby',
    size: SelectSize.M,
    isInvalid: false,
    isValid: false,
    isDisabled: false
};

const ExampleTemplate: Story<ISelectProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => setValue(event.target.value);

    return <Select {...args} options={options} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'Select an language',
    size: SelectSize.M,
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

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        size: {
            control: {
                type: 'select'
            }
        },
        options: {
            table: {
                disable: true
            }
        },
        value: {
            control: {
                type: 'select',
                options: options.map(o => o.value)
            }
        }
    }
};
