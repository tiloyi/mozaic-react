import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Tooltip from './Tooltip';
import { TooltipPlacement } from './Tooltip.types';

const TEST_TOOLTIP_TEXT = '1234';
const TEST_TOOLTIP_CONTENT_TEXT = 'Content';
const TEST_TOOLTIP_CONTENT = <span>{TEST_TOOLTIP_CONTENT_TEXT}</span>;

describe('components/Tooltip', () => {
    test('Tooltip text renders in the right place', () => {
        render(<Tooltip placement={TooltipPlacement.top} text={TEST_TOOLTIP_TEXT} />);

        const tooltip = screen.getByRole('tooltip');

        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveTextContent(TEST_TOOLTIP_TEXT);
    });

    test('Tooltip able to render content as component instead of text', () => {
        render(<Tooltip placement={TooltipPlacement.top} text={TEST_TOOLTIP_TEXT} content={TEST_TOOLTIP_CONTENT} />);

        const tooltip = screen.getByRole('tooltip');

        expect(tooltip).toBeInTheDocument();
        expect(within(tooltip).getByText(TEST_TOOLTIP_CONTENT_TEXT)).toBeInTheDocument();
    });

    test('Tooltip content renders in the right place', () => {
        render(
            <Tooltip placement={TooltipPlacement.top} text={TEST_TOOLTIP_TEXT}>
                {TEST_TOOLTIP_CONTENT}
            </Tooltip>
        );

        const tooltipContainer = screen.getByLabelText('tooltip-container');

        expect(tooltipContainer).toBeInTheDocument();
        expect(within(tooltipContainer).getByText(TEST_TOOLTIP_CONTENT_TEXT)).toBeInTheDocument();
    });
});
