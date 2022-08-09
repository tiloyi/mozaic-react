import React from 'react';
import { render, screen } from '@testing-library/react';
import { getSizeModifier } from './partials/Container';
import RatingStarsInput from './RatingStarsInput';
import RatingStarsResult, { getScoreModifier } from './RatingStarsResult';
import { sizes, scores } from './RatingStars.types';

describe('components/RatingStars', () => {
    describe('RatingStarsInput', () => {
        test.each(sizes)('renders with `%s` size correctly when input type ', size => {
            render(<RatingStarsInput size={size} aria-label="rating" />);

            expect(screen.getByLabelText('rating')).toHaveClass(getSizeModifier('input', size));
        });
    });

    describe('RatingStarsResult', () => {
        test.each(sizes)('renders with `%s` size correctly when result type ', size => {
            render(<RatingStarsResult size={size} aria-label="rating" />);

            expect(screen.getByLabelText('rating')).toHaveClass(getSizeModifier('result', size));
        });

        test.each(scores)('renders with `%s` score correctly when result type ', score => {
            render(<RatingStarsResult score={score} aria-label="rating" />);

            expect(screen.getByLabelText('rating')).toHaveClass(getScoreModifier(score));
        });
    });
});
