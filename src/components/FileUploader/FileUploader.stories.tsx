import React, {ChangeEvent, useState} from 'react';
import { Story } from '@storybook/react';
import FileUploader from './FileUploader';
import { IFileUploaderProps } from './FileUploader.types';
import { actions } from "@storybook/addon-actions";
import FileUploaderItem from "./partials/FileUploaderItem";
import {IFileUploadItemProps} from "./partials/FileUploaderItem.types";

const Template: Story<IFileUploaderProps> = args => <FileUploader {...args} />;

export const FileUploaderStory = Template.bind({});

FileUploaderStory.args = {
    label: 'Select a file',
    onChange: () => actions('Changed')
};

export interface IFileWithId {
    id: string;
    isValid: boolean;
    file: File;
    status: IFileUploadItemProps['status'];
}

export const ExampleTemplate: Story<Omit<IFileUploaderProps, 'onChange'>> = ({ label, ...props }) => {
    const [files, setFiles] = useState<IFileWithId[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const fileList: File[] = e.target.files ? Array.from(e.target.files) : [];
        const fileListWithId: IFileWithId[] = fileList.map(file => ({
            file,
            id: `${new Date().getTime()}-${file.name}-${file.size}`,
            isValid: true,
            status: 'loading',
        }));

        setFiles(previous => (props.multiple ? [...previous, ...fileListWithId] : [fileListWithId[0]]));

        // Simulating some sort of asynchronous file validation
        setTimeout(() => {
            setFiles(previous => previous.map(file => (
                { ...file, status: 'valid'}
            )))
        }, 2000)
    };

    const handleDelete = (file: IFileWithId) => (): void => {
        const newFileList = files.filter(file_ => file_.id !== file.id);
        setFiles(newFileList);
    };

    return (
        <FileUploader onChange={handleChange} label={label} id="fileSelect" multiple={props.multiple}>
            {files.length ? (
                files.map(document => (
                    <FileUploaderItem
                        key={document.id}
                        loadingIcon={<p>...</p>}
                        status={document.status}
                        fileName={document.file.name}
                        onDelete={handleDelete(document)}
                    />
                ))
            ) : null}
        </FileUploader>
    )
}

export const Example = ExampleTemplate.bind({});
Example.args = {
    label: 'Select file',
}

export const ExampleMultipleFiles = ExampleTemplate.bind({});
ExampleMultipleFiles.args = {
    label: 'Select files',
    multiple: true
}



export const argTypes = {
    label: {
        control: {
            type: 'string'
        }
    },
};
