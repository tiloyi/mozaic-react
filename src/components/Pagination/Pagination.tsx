/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ChangeEvent, FC, useState } from 'react';
import { IPaginationProps } from './Pagination.types';
import './Pagination.scss';
import cn from 'classnames';

const Pagination: FC<IPaginationProps> = ({
    className,
    isCompact,
    pagesNumber = 1,
    previousLabel = 'Previous page',
    nextLabel = 'Next Page',
    goNext,
    goPrevious,
    goToPage
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
        const newPage = Number(event.target.value);
        setCurrentPage(newPage);
        goToPage(newPage);
    };
    const handleNext = (): void => {
        setCurrentPage(current => current + 1);
        goNext(currentPage + 1);
    };
    const handlePrevious = (): void => {
        setCurrentPage(current => current - 1);
        goPrevious(currentPage - 1);
    };

    return (
        <>
            <div className={className}>
                <nav
                    className={cn('mc-pagination', {
                        'mc-pagination--compact': isCompact
                    })}
                    role="navigation"
                    aria-label="pagination"
                >
                    <a
                        onClick={handlePrevious}
                        className={cn('mc-pagination__button mc-pagination__button--previous', {
                            'is-disabled': currentPage === 1
                        })}
                        aria-label={previousLabel}
                    >
                        <svg className="mc-pagination__button-icon">
                            <use xlinkHref="#iconLeftL" />
                        </svg>
                    </a>
                    {!isCompact && (
                        <div className="mc-pagination__field">
                            <select
                                className="mc-select mc-pagination__select"
                                onChange={handleSelect}
                                value={currentPage}
                            >
                                {Array.from(Array(pagesNumber), (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {`Page ${i + 1} of ${pagesNumber}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <a
                        onClick={handleNext}
                        className={cn('mc-pagination__button mc-pagination__button--next', {
                            'is-disabled': currentPage === pagesNumber
                        })}
                        aria-label={nextLabel}
                    >
                        <svg className="mc-pagination__button-icon">
                            <use xlinkHref="#iconRightL" />
                        </svg>
                    </a>
                </nav>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg">
                <symbol id="iconLeftL" viewBox="0 0 24 24">
                    <path
                        className="cls-2"
                        d="M16.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L8.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,16.5,22Z"
                    />
                </symbol>
                <symbol id="iconRightL" viewBox="0 0 24 24">
                    <path
                        className="cls-2"
                        d="M7.5,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L15.09,12,6.79,3.71A1,1,0,1,1,8.21,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,7.5,22Z"
                    />
                </symbol>
            </svg>
        </>
    );
};
export default Pagination;
