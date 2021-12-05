import React from 'react';
import { Story } from '@storybook/react';
import { IPasswordInputProps } from './PasswordInput.types';
import PasswordInput from './PasswordInput';

const Template: Story<IPasswordInputProps> = args => <PasswordInput {...args}/>;

export const PasswordInputStory = Template.bind({});

PasswordInputStory.args = {};

export const argTypes = {};
