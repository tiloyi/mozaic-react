import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar, { getSizeModifier, getThemeModifier } from './ProgressBar';
import { TProgressBarSize } from './ProgressBar.types';

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

    test('throws error to console if `value` property is less than `minValue` property', () => {
        const error = jest.spyOn(global.console, 'error').mockImplementation(() => {});

        render(<ProgressBar value={5} minValue={10} />);

        expect(error).toBeCalledWith('The `value` property cannot be less than the `minValue` property');

        error.mockRestore();
    });

    test('throws error to console if `value` property is greater than `maxValue` property', () => {
        const error = jest.spyOn(global.console, 'error').mockImplementation(() => {});

        render(<ProgressBar value={50} maxValue={10} />);

        expect(error).toBeCalledWith('The `value` property cannot be greater than the `maxValue` property');

        error.mockRestore();
    });

    test('throws error to console if `minValue` property is greater than `maxValue` property', () => {
        const error = jest.spyOn(global.console, 'error').mockImplementation(() => {});

        render(<ProgressBar value={5} minValue={11} maxValue={10} />);

        expect(error).toBeCalledWith('The `minValue` property must be less than the `maxValue` property');

        error.mockRestore();
    });

    test('throws error to console if `minValue` property is equal to `maxValue` property', () => {
        const error = jest.spyOn(global.console, 'error').mockImplementation(() => {});

        render(<ProgressBar value={5} minValue={10} maxValue={10} />);

        expect(error).toBeCalledWith('The `minValue` property must be less than the `maxValue` property');

        error.mockRestore();
    });
});
