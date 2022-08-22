import React, { useCallback } from 'react';
import { usePaginationContext } from '../PaginationContext';
import { IPaginationButtonProps } from '../Pagination.types';
import PaginationButton from './Button';

const PaginationNextPageButton = (props: Omit<IPaginationButtonProps, 'isDisabled'>): JSX.Element => {
    const { currentPage, pagesTotal, isDisabled, onChange, onNext } = usePaginationContext();

    const handleClick = useCallback(() => {
        onChange?.(currentPage + 1);
        onNext?.();
    }, [onChange, onNext, currentPage]);

    return (
        <PaginationButton {...props} isDisabled={currentPage === pagesTotal || isDisabled} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mc-pagination__button-icon">
                <path d="M7.5,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L15.09,12,6.79,3.71A1,1,0,1,1,8.21,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,7.5,22Z" />
            </svg>
        </PaginationButton>
    );
};

export default PaginationNextPageButton;
