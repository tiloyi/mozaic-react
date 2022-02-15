import React from 'react';
import { useForm } from 'react-hook-form';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import View from '../View';
import { languages } from '../RadioGroup/RadioGroup.fixtures';
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
    interface IFormValues {
        language: string;
    }

    const { register, handleSubmit } = useForm<IFormValues>({
        defaultValues: {
            language: languages[0].toLowerCase()
        }
    });

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                {languages.map(lang => (
                    <Radio
                        className="radio-group-item"
                        {...register('language')}
                        key={lang.toLowerCase()}
                        value={lang.toLowerCase()}
                    >
                        {lang}
                    </Radio>
                ))}
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});
