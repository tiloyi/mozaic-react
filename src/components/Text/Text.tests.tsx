import React from 'react';
import { render, screen } from '@testing-library/react';
import { sizes } from '../../constants/Size';
import Text from './Text';
import { tags, TextAlign, themes } from './Text.types';

describe('components/Text', () => {
    test.each(tags)('renders as `%s` tag correctly', tag => {
        render(<Text as={tag}>text</Text>);

        expect(screen.getByText('text').tagName).toBe(tag.toUpperCase());
    });

    test.each([TextAlign.Left, TextAlign.Center, TextAlign.Right])('renders with `%s` text align correctly', align => {
        render(<Text align={align}>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--${align}`);
    });

    test.each(themes)('renders with `%s` theme correctly', theme => {
        render(<Text theme={theme}>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--${theme}`);
    });

    test.each(sizes)('renders with `%s` size correctly', size => {
        render(<Text size={size}>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--${size}`);
    });
});
