import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('components/Modal', () => {
    test('renders correctly', () => {
        render(<Modal>Test</Modal>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
