import React, { useCallback } from 'react';
import { usePaginationContext } from '../PaginationContext';
import { IPaginationButtonProps } from '../Pagination.types';
import PaginationButton from './Button';

const PaginationPreviousPageButton = (props: Omit<IPaginationButtonProps, 'isDisabled'>): JSX.Element => {
    const { currentPage, isDisabled, onChange, onPrevious } = usePaginationContext();

    const handleClick = useCallback(() => {
        onChange?.(currentPage - 1);
        onPrevious?.();
    }, [onChange, onPrevious, currentPage]);

    return (
        <PaginationButton {...props} isDisabled={currentPage === 1 || isDisabled} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mc-pagination__button-icon">
                <path d="M16.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L8.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,16.5,22Z" />
            </svg>
        </PaginationButton>
    );
};

export default PaginationPreviousPageButton;
