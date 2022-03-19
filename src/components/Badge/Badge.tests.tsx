import React from 'react';
import { render, screen } from '@testing-library/react';
import { themes } from './Badge.types';
import Badge from './Badge';

describe('components/Badge', () => {
    test('renders children correctly', () => {
        render(<Badge>Text</Badge>);

        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    test('treats default theme as "info"', () => {
        render(<Badge>Text</Badge>);

        expect(screen.getByText('Text')).toHaveClass('mc-badge--info');
    });

    test.each(themes)('renders with `%s` theme correctly', theme => {
        render(<Badge theme={theme}>text</Badge>);

        expect(screen.getByText('text')).toHaveClass(`mc-badge--${theme}`);
    });
});
