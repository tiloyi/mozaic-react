import React from 'react';
import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';

describe('components/TextArea', () => {
    test('renders correctly', () => {
        render(<TextArea />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});
