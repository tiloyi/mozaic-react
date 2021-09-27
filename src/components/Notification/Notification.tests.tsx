import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from './Notification';

describe('components/Notification', () => {
    test('renders correctly', () => {
        render(<Notification>Test</Notification>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
