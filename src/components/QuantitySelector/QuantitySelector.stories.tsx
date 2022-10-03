import React, { useState } from 'react';
import { useForm, useController } from 'react-hook-form';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import View from '../View';
import { IQuantitySelectorProps } from './QuantitySelector.types';
import QuantitySelector from './QuantitySelector';

const Template: Story<IQuantitySelectorProps> = args => <QuantitySelector {...args} />;

export const Controls = Template.bind({});

Controls.args = {
    defaultValue: 5,
    size: 'm',
    maxValue: 10,
    minValue: 0,
    placeholder: 'Placeholder text',
    isDisabled: false,
    theme: 'primary',
    variant: 'bordered'
};

export const Values = Template.bind({});

Values.args = {
    defaultValue: -5,
    minValue: 0,
    maxValue: 10,
    isDisabled: false
};

const ExampleTemplate: Story<IQuantitySelectorProps> = args => {
    const [value, setValue] = useState<number | undefined>(0);

    const handleChange = (nextValue?: number): void => setValue(nextValue);

    return <QuantitySelector {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    step: 0.5,
    minValue: 0,
    maxValue: 10,
    isDisabled: false
};

Example.argTypes = {
    defaultValue: {
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

const ReactHookFormTemplate: Story = () => {
    interface IFormValues {
        value: number;
    }

    const { control, handleSubmit } = useForm<IFormValues>({
        defaultValues: {
            value: 0
        }
    });

    const {
        field: { value, onChange }
    } = useController({ control, name: 'value' });

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                <QuantitySelector value={value} onChange={onChange} />
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});

export const argTypes = {
    size: {
        control: 'select'
    },
    theme: {
        control: 'select'
    },
    variant: {
        control: 'select'
    }
};
