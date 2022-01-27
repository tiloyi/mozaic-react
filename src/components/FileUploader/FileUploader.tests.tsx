import React from 'react';
import { render, screen } from '@testing-library/react';
import FileUploader from './FileUploader';
import userEvent from '@testing-library/user-event';

describe('components/FileUploader', () => {
    test('upload file', () => {
        const file = new File(['hello'], 'hello.png', {type: 'image/png'})

        render(<FileUploader>Select file to upload</FileUploader>);

        const input = screen.getByLabelText("Select file to upload") as HTMLInputElement;
        userEvent.upload(input, file)

        expect(input.files).toHaveLength(1)
        expect(input.files?.item(0)).toStrictEqual(file)
    });

    test('upload multiple files', () => {
        const files = [
            new File(['hello'], 'hello.png', {type: 'image/png'}),
            new File(['there'], 'there.png', {type: 'image/png'}),
        ]

        render(<FileUploader multiple>Select file to upload</FileUploader>);

        const input = screen.getByLabelText("Select file to upload") as HTMLInputElement;
        userEvent.upload(input, files)

        expect(input.files).toHaveLength(2)
        expect(input.files?.item(0)).toStrictEqual(files[0])
        expect(input.files?.item(1)).toStrictEqual(files[1])
    })

    test('renders children correctly', () => {
        render(<FileUploader>Select file to upload</FileUploader>);

        expect(screen.getByText('Select file to upload')).toBeInTheDocument();
    });

    test('renders label correctly', () => {
        render(<FileUploader label="Custom label">Select file to upload</FileUploader>);

        expect(screen.getByLabelText('Select file to upload')).toBeInTheDocument();
    });

    test('renders required label correctly', () => {
        render(<FileUploader label="Custom label" requiredText="mandatory" required>Select file to upload</FileUploader>);

        expect(screen.getByText('mandatory')).toBeInTheDocument();
    });

    test('renders helper text correctly', () => {
        render(<FileUploader label="Custom label" helperText="Only .jpg and .png files">Select file to upload</FileUploader>);

        expect(screen.getByText('Only .jpg and .png files')).toBeInTheDocument();
    });

    test('renders error text correctly', () => {
        render(<FileUploader label="Custom label" errorMessage="Some error" isInvalid>Select file to upload</FileUploader>);
        expect(screen.getByLabelText('Select file to upload')).toHaveClass('is-invalid');
        expect(screen.getByText('Some error')).toBeInTheDocument();
    });

    test('renders disabled correctly', () => {
        render(<FileUploader isDisabled>Select file to upload</FileUploader>);

        expect(screen.getByLabelText('Select file to upload')).toBeDisabled();
    });
});
