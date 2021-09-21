import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import { BadgeTheme } from './Badge.types';

describe('components/Badge', () => {
    test('renders children correctly', () => {
        render(<Badge>Text</Badge>);

        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    test('treats default theme as "info"', () => {
        render(<Badge>Text</Badge>);

        expect(screen.getByText('Text')).toHaveClass('mc-badge--info');
    });

    test.each([BadgeTheme.Danger, BadgeTheme.Neutral, BadgeTheme.Success, BadgeTheme.Warning])(
        'renders with `%s` theme correctly',
        theme => {
            render(<Badge theme={theme}>text</Badge>);

            expect(screen.getByText('text')).toHaveClass(`mc-badge--${theme}`);
        }
    );
});
