import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';
import { tags, textAligns, sizes, lineHeights, weights, themes, TTextSize, TTextLineHeight } from './Text.types';

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

    test('renders with default font size and line height correctly', () => {
        render(<Text>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--m-l`);
    });

    const sizeCases = sizes.reduce((acc: Array<[TTextSize, TTextLineHeight]>, size: TTextSize) => {
        const piece: Array<[TTextSize, TTextLineHeight]> = lineHeights.map(lineHeight => [size, lineHeight]);

        return [...acc, ...piece];
    }, []);

    test.each(sizeCases)('renders with `%s` font size and `%s` line height correctly', (size, lineHeight) => {
        render(
            <Text size={size} lineHeight={lineHeight}>
                text
            </Text>
        );

        expect(screen.getByText('text')).toHaveClass(`mt-text--${size}-${lineHeight}`);
    });

    test.each(weights)('renders with `%s` weight correctly', weight => {
        render(<Text weight={weight}>text</Text>);

        expect(screen.getByText('text')).toHaveClass(`mt-text--${weight}`);
    });
});
