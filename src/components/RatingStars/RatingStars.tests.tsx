import React from 'react';
import { render, screen } from '@testing-library/react';
import { sizes, types, scores } from './RatingStars.types';
import RatingStarsInput from './RatingStarsInput';
import RatingStarsResult from './RatingStarsResult';

describe('components/RatingStars', () => {
    describe('RatingStarsInput', () => {});

    describe('RatingStarsResult', () => {});

    // test.each(types)('renders with `%s` types correctly', type => {
    //     render(<RatingStars type={type} name="test" />);
    //     expect(screen.getByTestId('rating-stars-wrapper')).toHaveClass(`mc-stars-${type}`);
    // });
    //
    // test.each(sizes)('renders with `%s` sizes correctly when result type ', size => {
    //     render(<RatingStars size={size} name="test" />);
    //     expect(screen.getByTestId('rating-stars-wrapper')).toHaveClass(`mc-stars-result mc-stars-result--${size}`);
    // });
    //
    // test.each(sizes)('renders with `%s` sizes correctly when input type', size => {
    //     render(<RatingStars type="input" size={size} name="test" />);
    //     expect(screen.getByTestId('rating-stars-wrapper')).toHaveClass(`mc-stars-input mc-stars-input--${size}`);
    // });
    //
    // test.each(scores)('renders with `%s` scores correctly when result type', score => {
    //     render(<RatingStars score={score} name="test" />);
    //     expect(screen.getByTestId('rating-stars-wrapper')).toHaveClass(
    //         `mc-stars-result mc-stars-result--m mc-stars-result--score-${score}`
    //     );
    // });
});
