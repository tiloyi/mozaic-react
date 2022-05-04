import React from 'react';
import { render, screen } from '@testing-library/react';
import FileUploader from './FileUploader';
import userEvent from '@testing-library/user-event';

const file = new File(['hello'], 'hello.png', {type: 'image/png'})
const onDelete = jest.fn();

describe('components/FileUploader', () => {
    test('upload file', () => {
        render(<FileUploader files={[file]} onDeleteFile={onDelete} id="1">Select file to upload</FileUploader>);

        const input = screen.getByLabelText("Select file to upload") as HTMLInputElement;
        userEvent.upload(input, file)

        expect(input.files).toHaveLength(1)
        expect(input.files?.item(0)).toStrictEqual(file)
        expect(screen.getByText('hello.png')).toBeInTheDocument();
    });

    test('upload multiple files', () => {
        const files = [
            new File(['hello'], 'hello.png'),
            new File(['there'], 'there.png'),
        ]

        render(<FileUploader files={files} onDeleteFile={onDelete} id="1" multiple>Select file to upload</FileUploader>);

        const input = screen.getByLabelText("Select file to upload") as HTMLInputElement;
        userEvent.upload(input, files)

        expect(input.files).toHaveLength(2)
        expect(input.files?.item(0)).toStrictEqual(files[0])
        expect(input.files?.item(1)).toStrictEqual(files[1])
        expect(screen.getByText('hello.png')).toBeInTheDocument();
        expect(screen.getByText('there.png')).toBeInTheDocument();
    })

    test('renders children correctly', () => {
        render(<FileUploader files={[file]} id="1" onDeleteFile={onDelete}>Select file to upload</FileUploader>);

        expect(screen.getByText('Select file to upload')).toBeInTheDocument();
    });

    test('renders disabled correctly', () => {
        render(<FileUploader files={[file]} id="1" onDeleteFile={onDelete} isDisabled>Select file to upload</FileUploader>);

        expect(screen.getByLabelText('Select file to upload')).toBeDisabled();
    });
});
