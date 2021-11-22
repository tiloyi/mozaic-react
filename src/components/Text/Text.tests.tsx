import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';
import { tags, textAligns, sizes, weights, themes } from './Text.types';

describe('components/Text', () => {
    test.each(tags)('renders as `%s` tag correctly', tag => {
        render(<Text as={tag}>text</Text>);

        expect(screen.getByText('text').tagName).toBe(tag.toUpperCase());
    });

    test.each(textAligns)('renders with `%s` text textAlign correctly', textAlign => {
        render(<Text textAlign={textAlign}>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--${textAlign}`);
    });

    test.each(themes)('renders with `%s` theme correctly', theme => {
        render(<Text theme={theme}>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--color-${theme}`);
    });

    test('renders with default size correctly', () => {
        render(<Text>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--m`);
    });

    test.each(sizes)('renders with `%s` size correctly', size => {
        render(<Text size={size}>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--${size}`);
    });

    test.each(weights)('renders with `%s` weight correctly', weight => {
        render(<Text weight={weight}>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--${weight}`);
    });
});
