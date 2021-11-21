import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Tooltip from './Tooltip';

const TEST_TOOLTIP_TEXT = '1234';
const TEST_TOOLTIP_CONTENT_TEXT = 'Content';
const TEST_TOOLTIP_CONTENT = <span>{TEST_TOOLTIP_CONTENT_TEXT}</span>;

describe('components/Tooltip', () => {
    test('Tooltip text renders in the right place', () => {
        render(<Tooltip placement="top" label={TEST_TOOLTIP_TEXT} />);

        expect(screen.getByRole('tooltip')).toHaveTextContent(TEST_TOOLTIP_TEXT);
    });

    test('Tooltip able to render content as component instead of text', () => {
        render(<Tooltip placement="top" label={TEST_TOOLTIP_CONTENT} />);

        const tooltip = screen.getByRole('tooltip');

        expect(tooltip).toBeInTheDocument();
        expect(within(tooltip).getByText(TEST_TOOLTIP_CONTENT_TEXT)).toBeInTheDocument();
    });

    test('Tooltip content renders in the right place', () => {
        render(
            <Tooltip placement="top" label={TEST_TOOLTIP_TEXT}>
                {TEST_TOOLTIP_CONTENT}
            </Tooltip>
        );

        expect(screen.getByText(TEST_TOOLTIP_CONTENT_TEXT)).toBeInTheDocument();
    });
});
