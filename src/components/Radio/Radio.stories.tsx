import React from 'react';
import { useForm } from 'react-hook-form';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import View from '../View';
import { IRadioProps } from './Radio.types';
import Radio from './Radio';

const ControlsTemplate: Story<IRadioProps> = args => <Radio {...args}>Radio label</Radio>;

export const Controls = ControlsTemplate.bind({});

Controls.args = {
    isChecked: false,
    isDisabled: false,
    isInvalid: false
};

const ReactHookFormTemplate: Story = () => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                <Radio {...register('value')}>Label</Radio>
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});
