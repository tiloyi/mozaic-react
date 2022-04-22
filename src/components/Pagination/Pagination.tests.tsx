import React, { FC } from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';
import { usePagination } from '../..';

const PaginationComponent: FC = () => {
    const { handleChangePage, handleNext, handlePrevious, currentPage } = usePagination();
    const pagesNumber = 10;

    return (
        <Pagination
            pagesNumber={pagesNumber}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
        />
    );
};

describe('components/Pagination', () => {
    test('renders correctly', () => {
        render(<PaginationComponent />);
    });
});
