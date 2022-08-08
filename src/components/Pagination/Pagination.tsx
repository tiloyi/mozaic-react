import React, { FC, useCallback } from 'react';
import { PaginationButton, PaginationContainer, PaginationSelect } from './partials';
import { IPaginationProps } from './Pagination.types';
import './Pagination.scss';

const Pagination: FC<IPaginationProps> = ({ className, pagesTotal, currentPage, isCompact, isDisabled, onChange }) => {
    const handleNext = useCallback(() => onChange?.(currentPage + 1), [onChange, currentPage]);

    const handlePrevious = useCallback(() => onChange?.(currentPage - 1), [onChange, currentPage]);

    const handleSelectChange = useCallback(() => {
        //
    }, [onChange, currentPage]);

    return (
        <PaginationContainer className={className} isCompact={isCompact} aria-label="Pagination">
            <PaginationButton
                aria-label="Previous page"
                isDisabled={currentPage === 1 || isDisabled}
                onClick={handlePrevious}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mc-pagination__button-icon">
                    <path d="M16.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L8.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,16.5,22Z" />
                </svg>
            </PaginationButton>
            {!isCompact && <PaginationSelect currentPage={currentPage} isDisabled={isDisabled} />}
            <PaginationButton
                aria-label="Next page"
                isDisabled={currentPage === pagesTotal || isDisabled}
                onClick={handleNext}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mc-pagination__button-icon">
                    <path d="M7.5,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L15.09,12,6.79,3.71A1,1,0,1,1,8.21,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,7.5,22Z" />
                </svg>
            </PaginationButton>
        </PaginationContainer>
    );
};

export default Pagination;
