import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FileUploader from './FileUploader';
import { FileUploaderInput, FileUploaderFile } from './partials';
import { IFileUploaderFile } from './FileUploader.types';

describe('components/FileUploader', () => {
    describe('FileUploaderInput', () => {
        test('renders correctly in disabled state', () => {
            render(<FileUploaderInput isDisabled>Select file to upload</FileUploaderInput>);

            expect(screen.getByLabelText('Select file to upload')).toBeDisabled();
        });

        test('calls onChange callback', () => {
            const onChange = jest.fn();

            render(<FileUploaderInput onChange={onChange}>Select file to upload</FileUploaderInput>);

            const input = screen.getByLabelText('Select file to upload') as HTMLInputElement;
            const file = new File(['file'], 'file.png', { type: 'image/png' });

            userEvent.upload(input, file);

            expect(input.files).toHaveLength(1);
            expect(input.files?.item(0)).toStrictEqual(file);

            expect(onChange).toBeCalledTimes(1);
        });
    });

    describe('FileUploaderFile', () => {
        test('renders correctly in valid state', () => {
            render(<FileUploaderFile name="file.png" isValid aria-label="file" />);

            expect(screen.getByLabelText('file')).toHaveClass('mc-fileuploader__file--is-valid');
        });

        test('renders correctly in invalid state', () => {
            render(
                <FileUploaderFile
                    name="file.png"
                    errorMessage="Oops, the file is not uploaded"
                    isInvalid
                    aria-label="file"
                />
            );

            expect(screen.getByLabelText('file')).toHaveClass('mc-fileuploader__file--is-invalid');
            expect(screen.getByText('Oops, the file is not uploaded')).toBeInTheDocument();
        });

        test('calls onRemove callback', () => {
            const onRemove = jest.fn();

            render(<FileUploaderFile name="file.png" onRemove={onRemove} />);

            userEvent.click(screen.getByRole('button'));

            expect(onRemove).toBeCalledWith('file.png');
        });
    });

    describe('FileUploader', () => {
        test('renders all attached files', () => {
            const files: Array<IFileUploaderFile> = [
                { name: 'file1.png' },
                { name: 'file2.png' },
                { name: 'file3.png' },
                { name: 'file4.png' }
            ];

            render(<FileUploader files={files} />);

            files.forEach(file => {
                expect(screen.getByText(file.name)).toBeInTheDocument();
            });
        });

        test('call onRemove callback', () => {
            const onRemove = jest.fn();
            const files: Array<IFileUploaderFile> = [{ name: 'file.png' }];

            render(<FileUploader files={files} onRemove={onRemove} />);

            userEvent.click(screen.getByRole('button'));

            expect(onRemove).toBeCalledWith('file.png');
        });
    });
});
