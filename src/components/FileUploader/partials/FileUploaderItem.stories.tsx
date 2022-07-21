import React from 'react';
import { Story } from '@storybook/react';
import FileUploaderItem from './FileUploaderItem';
import { IFileUploadItemProps } from './FileUploaderItem.types';
import { actions } from "@storybook/addon-actions";

const Template: Story<IFileUploadItemProps> = args => <FileUploaderItem {...args} />;

export const FileUploaderItemStory = Template.bind({});

FileUploaderItemStory.args = {
    status: 'valid',
    fileName: 'Contract.pdf',
    onDelete: () => actions('Deleted')
};

export const FileUploaderItemStoryInvalid = Template.bind({});

FileUploaderItemStoryInvalid.args = {
    status: 'invalid',
    fileName: 'Contract.pdf',
    onDelete: () => actions('Deleted')
};

export const FileUploaderItemStoryLoading = Template.bind({});

FileUploaderItemStoryLoading.args = {
    status: 'loading',
    fileName: 'Contract.pdf',
    onDelete: () => actions('Deleted'),
    loadingIcon: <p>Wait</p>
};


export const argTypes = {
    status: {
        control: {
            type: 'select'
        }
    },
    fileName: {
        control: {
            type: 'string'
        }
    }
};
