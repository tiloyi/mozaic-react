import React from 'react';
import { render, screen } from '@testing-library/react';
import { sizes, themes } from './Loader.types';
import Loader, { getSizeModifier, getThemeModifier } from './Loader';

describe('components/Loader', () => {
    test('renders correctly', () => {
        render(<Loader />);

        expect(screen.getByRole('progressbar')).toHaveClass('mc-loader');
    });

    test.each(sizes)('renders with `%s` size correctly', size => {
        render(<Loader size={size} />);

        expect(screen.getByRole('progressbar')).toHaveClass(getSizeModifier(size));
    });

    test.each(themes)('renders with `%s` theme correctly', theme => {
        render(<Loader theme={theme} />);

        expect(screen.getByRole('progressbar')).toHaveClass(getThemeModifier(theme));
    });
});
