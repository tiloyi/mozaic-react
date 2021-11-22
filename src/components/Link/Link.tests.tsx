import React from 'react';
import { render, screen } from '@testing-library/react';
import { sizes, themes } from './Link.types';
import Link, { getSizeModifier, getThemeModifier } from './Link';

describe('components/Link', () => {
    test('renders correctly', () => {
        render(<Link>link</Link>);

        expect(screen.getByText('link')).toHaveClass('mc-link');
    });

    test.each(sizes)('renders with `%s` size correctly', size => {
        render(<Link size={size}>link</Link>);

        expect(screen.getByText('link')).toHaveClass(getSizeModifier(size));
    });

    test.each(themes)('renders with `%s` theme correctly', theme => {
        render(<Link theme={theme}>link</Link>);

        expect(screen.getByText('link')).toHaveClass(getThemeModifier(theme));
    });
});
