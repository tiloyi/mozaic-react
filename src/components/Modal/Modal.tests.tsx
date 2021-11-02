import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('components/Modal', () => {
    test.skip('renders correctly', () => {
        render(<Modal id="modal">Test</Modal>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
