import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FileUploaderItem} from "./index";

describe('FileUploaderItem', () => {
    it('Renders correctly', () => {
        const handleDelete = jest.fn();
        render(<FileUploaderItem id="fileLi" onDelete={handleDelete} fileName="Contract.pdf" />);
        const fileLIElement = document.querySelector('#fileLi') as HTMLLIElement;
        expect(screen.getByText('Contract.pdf')).toBeInTheDocument();
        expect(fileLIElement).toHaveClass('mc-fileuploader__file--is-valid');
    });

    it('Renders invalid FileUploadItem correctly', () => {
        const handleDelete = jest.fn();
        render(<FileUploaderItem status="invalid" id="fileLi" onDelete={handleDelete} fileName="Contract.pdf" />);
        const fileLIElement = document.querySelector('#fileLi') as HTMLLIElement;
        expect(fileLIElement).toHaveClass('mc-fileuploader__file--is-invalid')
    });

    it('Renders loading FileUploadItem correctly', () => {
        const handleDelete = jest.fn();
        render(<FileUploaderItem status="loading" id="fileLi" onDelete={handleDelete} fileName="Contract.pdf" loadingIcon={<span>Loading</span>} />);
        expect(screen.getByText('Loading')).toBeInTheDocument();
    });

    it('Call onDelete when clicking on delete button', () => {
        const handleDelete = jest.fn();
        render(<FileUploaderItem id="fileLi" onDelete={handleDelete} fileName="Contract.pdf" />);
        const button = document.querySelector('button') as HTMLButtonElement;
        userEvent.click(button);
        expect(handleDelete).toHaveBeenCalledTimes(1);
    });
})
