import React, { useCallback, useState, ChangeEvent } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useController, useForm } from 'react-hook-form';
import FileUploaderInput from './partials/Input';
import FileUploaderFile from './partials/File';
import FileUploader from './FileUploader';
import { IFileUploaderInputProps, IFileUploaderFileProps, IFileUploaderFile } from './FileUploader.types';
import { View } from '../View';
import Button from '../Button';

const InputTemplate: Story<IFileUploaderInputProps> = args => (
    <FileUploaderInput {...args}>Select a file to upload</FileUploaderInput>
);

export const Input = InputTemplate.bind({});

Input.args = {
    onChange: action('Change!'),
    isDisabled: false
};

Input.argTypes = {
    onRemove: {
        table: {
            disable: true
        }
    },
    files: {
        table: {
            disable: true
        }
    }
};

const FileTemplate: Story<IFileUploaderFileProps> = args => <FileUploaderFile {...args} />;

export const File = FileTemplate.bind({});

File.args = {
    name: 'Uploaded file',
    errorMessage: 'Oops, the file is not uploaded.',
    isValid: false,
    isInvalid: true
};

File.argTypes = {
    onRemove: {
        table: {
            disable: true
        }
    },
    files: {
        table: {
            disable: true
        }
    },
    isDisabled: {
        table: {
            disable: true
        }
    }
};

const UploaderTemplate: Story = () => {
    const [files, setFiles] = useState<Array<IFileUploaderFile>>([]);

    const handleRemove = useCallback(
        (fileName: string) => setFiles(prev => prev.filter(file => file.name !== fileName)),
        []
    );

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setFiles(previousItems => {
            const currentFiles = event.target.files as FileList;

            if (!currentFiles.length) {
                return [...previousItems];
            }

            const items = Array.from<IFileUploaderFile>(currentFiles).map(file => ({ name: file.name, isValid: true }));

            return [...previousItems, ...items];
        });
    }, []);

    return (
        <FileUploader multiple accept="image/png" files={files} onChange={handleChange} onRemove={handleRemove}>
            Select a png file to upload
        </FileUploader>
    );
};

export const Uploader = UploaderTemplate.bind({});

const ReactHookFormTemplate: Story = () => {
    const { control, handleSubmit } = useForm<{ files: Array<IFileUploaderFile> }>({
        defaultValues: {
            files: []
        }
    });

    const {
        field: { value, onChange }
    } = useController({ control, name: 'files' });

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const currentFiles = event.target.files as FileList;

            onChange([...value, { name: currentFiles.item(0)?.name, isValid: true }]);
        },
        [value, onChange]
    );

    const handleRemove = useCallback(
        (fileName: string) => onChange(value.filter(item => item.name !== fileName)),
        [value, onChange]
    );

    return (
        <form onSubmit={handleSubmit(action('Submit'))}>
            <View marginBottom="mu100">
                <FileUploader files={value} accept="image/png" onChange={handleChange} onRemove={handleRemove}>
                    Select a png file to upload
                </FileUploader>
            </View>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});
