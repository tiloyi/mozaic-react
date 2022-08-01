import React, { ChangeEvent, useState } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import SVGIcon from '../../../.storybook/assets/SVGIcon';
import Button from '../Button';
import View from '../View';
import TextInput from './TextInput';
import { ITextInputProps } from './TextInput.types';

const ControlsTemplate: Story<ITextInputProps> = args => <TextInput {...args} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    value: 'lorem ipsum',
    size: 'm',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

const ExampleTemplate: Story<ITextInputProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

    return <TextInput {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

Example.args = {
    placeholder: 'placeholder',
    size: 'm',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

export const TextInputWithIcon = ExampleTemplate.bind({});

TextInputWithIcon.args = {
    placeholder: 'placeholder',
    size: 'm',
    isDisabled: false,
    isInvalid: false,
    isValid: false,
    icon: <SVGIcon />
};

const ReactHookFormTemplate: Story = () => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                <TextInput {...register('value')} />
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});

export const argTypes = {
    size: {
        control: {
            type: 'select'
        }
    }
};
