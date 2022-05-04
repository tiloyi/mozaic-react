import React, { useCallback, useState, ChangeEvent } from 'react';
import { Story } from '@storybook/react';
import FileUploader from './FileUploader';
import { IFileUploaderProps } from './FileUploader.types';
import { useController, useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';
import View from '../View';
import Button from '../Button';

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

Example.args = { isDisabled: false, multiple: true, id: '1' };

const ReactHookFormTemplate: Story<IFileUploaderProps> = args => {
  const { control, handleSubmit } = useForm<{ files: Array<File> }>({
    defaultValues: {
      files: []
    }
  });

  const {
    field: { value, onChange }
  } = useController({ control, name: 'files' });

    return (
      <form onSubmit={handleSubmit(action('Submit'))}>
          <View marginBottom="mu100">
              <FileUploader
                {...args}
                id="1"
                onChange={e => onChange(args.multiple ? value.concat([...e.target.files as FileList]) : [...e.target.files as FileList])}
                files={value}
                onDeleteFile={fileName => onChange(value.filter(item => item.name !== fileName))}
              >
                  Select file to upload
              </FileUploader>
          </View>
          <Button type="submit">Submit</Button>
      </form>
    );
};

export const ReactHookForm = ReactHookFormTemplate.bind({});

ReactHookForm.args = { multiple: true};
