import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FileUploader from "./FileUploader";
import { ExampleTemplate } from "./FileUploader.stories";

describe('FileUploader', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const file2 = new File(['hello2'], 'hello2.png', { type: 'image/png' });

    it('Renders correctly', () => {
        const handleChange = jest.fn();
        render(<FileUploader onChange={handleChange} label="Select a file" />);

        expect(screen.getByText('Select a file')).toBeInTheDocument();
    });

    it('Should render disabled', () => {
        const handleChange = jest.fn();
        render(<FileUploader onChange={handleChange} label="Select a file" disabled />);

        expect(screen.getByLabelText('Select a file')).toBeDisabled();
    })

    it('Should be able to display FileUploaderItem when adding file to input', () => {
        render(<ExampleTemplate label="Select a file" />);

        const inputFile = document.querySelector('#fileSelect') as HTMLInputElement;
        expect(inputFile).toBeInTheDocument();
        userEvent.upload(inputFile, file);
        expect(inputFile.files?.length).toEqual(1);
        expect(screen.getByText('hello.png')).toBeVisible();
    });

    it('should add multiple file', () => {
        render(<ExampleTemplate label="Select a file" multiple />);

        const inputFile = document.querySelector('#fileSelect') as HTMLInputElement;
        userEvent.upload(inputFile, [file, file2]);
        expect(screen.getByText('hello.png')).toBeVisible();
        expect(screen.getByText('hello2.png')).toBeVisible();
    });
})
