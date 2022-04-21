import React, { FC } from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';
import { usePagination } from '../..';

const PaginationComponent: FC = () => {
    const initialItems = Array.from(Array(30), (_e, i) => i);
    const { handlePage, handleNext, handlePrevious, currentPage, pagesNumber } = usePagination(
        initialItems as []
    );
    return (
        <Pagination
            pagesNumber={pagesNumber}
            currentPage={currentPage}
            handlePage={handlePage}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
        />
    );
};

describe('components/Breadcrumbs', () => {
    test('renders correctly', () => {
        render(<PaginationComponent />);
    });
});
