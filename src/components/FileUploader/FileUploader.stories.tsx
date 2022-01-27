import React from 'react';
import { Story } from '@storybook/react';
import FileUploader from './FileUploader';
import { IFileUploaderProps } from './FileUploader.types';

const ExampleTemplate: Story<IFileUploaderProps> = args => <FileUploader {...args}>Select file to upload</FileUploader>;

export const Example = ExampleTemplate.bind({});

Example.args = { isDisabled: false, isInvalid: false, label: 'Label', errorMessage: '' };
