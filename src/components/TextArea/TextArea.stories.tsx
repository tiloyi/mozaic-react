import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import View from '../View';
import TextArea from './TextArea';
import { ITextAreaProps } from './TextArea.types';

const ControlsTemplate: Story<ITextAreaProps> = args => <TextArea {...args} />;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    value: 'lorem ipsum',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};

const ExampleTemplate: Story<ITextAreaProps> = args => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => setValue(event.target.value);

    return <TextArea {...args} value={value} onChange={handleChange} />;
};

export const Example = ExampleTemplate.bind({});

const ReactHookFormTemplate: Story = () => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                <TextArea {...register('value')} />
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});

Example.args = {
    placeholder: 'placeholder',
    isDisabled: false,
    isInvalid: false,
    isValid: false
};
