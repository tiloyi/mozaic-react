import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar, { getSizeModifier, getThemeModifier } from './ProgressBar';
import { sizes, TProgressBarSize } from './ProgressBar.types';

describe('components/ProgressBar', () => {
    test('renders correctly', () => {
        render(<ProgressBar value={50} />);

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
        expect(screen.getByText('50%')).toBeInTheDocument();
    });

    test('renders branded correctly', () => {
        render(<ProgressBar value={50} theme="branded" aria-label="progress" />);

        expect(screen.getByLabelText('progress')).toHaveClass(getThemeModifier('branded'));
    });

    test.each(['xs', 's'] as Array<TProgressBarSize>)('renders with `%s` size correctly', size => {
        render(<ProgressBar value={50} size={size} aria-label="progress" />);

        expect(screen.getByLabelText('progress')).toHaveClass(getSizeModifier(size));
    });

    test('changes value color if it is greater than 51', () => {
        render(<ProgressBar value={52} aria-label="progress" withValue />);

        expect(screen.getByLabelText('progress')).toHaveClass('mc-progressbar--percent');
    });

    test('renders with custom value renderer', () => {
        render(<ProgressBar value={52} aria-label="progress" withValue renderValue={value => `${value} percents`} />);

        expect(screen.getByLabelText('progress')).toHaveTextContent('52 percents');
    });
});
