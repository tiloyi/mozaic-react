import React, { useCallback, useState, ChangeEvent } from 'react';
import { Story } from '@storybook/react';
import FileUploader from './FileUploader';
import { IFileUploaderProps } from './FileUploader.types';

const ExampleTemplate: Story<IFileUploaderProps> = args => {
    const [files, setFiles] = useState<Array<File>>([])
    const handleDelete = useCallback((fileName: string) => {
          setFiles(prev => prev.filter(item => item.name !== fileName))
      }, []);
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFiles(prev => {
        const currentFiles = e.target.files as FileList

        if (!currentFiles.length) {
            return [...prev]
        } else if (prev.length && !args.multiple) {
            return [...currentFiles]
        }
        return [...prev, ...currentFiles]
      })
    }, []);
    return (
        <FileUploader
            {...args}
            onChange={handleChange}
            files={files}
            onDeleteFile={handleDelete}
        >
            Select file to upload
        </FileUploader>
    );
}

export const Example = ExampleTemplate.bind({});

Example.args = { isDisabled: false, multiple: true };
