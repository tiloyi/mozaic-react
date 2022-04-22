import React, { FC } from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';
import { usePagination } from '../..';

const PaginationComponent: FC = () => {
    const { handlePage, handleNext, handlePrevious, currentPage } = usePagination();
    const pagesNumber = 10;
    
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

describe('components/Pagination', () => {
    test('renders correctly', () => {
        render(<PaginationComponent />);
    });
});
