/* eslint-disable jsx-a11y/no-onchange */
import React, { FC } from 'react';
import { IPaginationProps } from './Pagination.types';
import cn from 'classnames';
import './Pagination.scss';

const Pagination: FC<IPaginationProps> = ({
    className,
    pagesNumber,
    currentPage,
    handleChangePage,
    handleNext,
    handlePrevious,
    isCompact
}) => (
    <>
        <div className={className}>
            <nav
                className={cn('mc-pagination', {
                    'mc-pagination--compact': isCompact
                })}
                role="navigation"
                aria-label="pagination"
            >
                <div
                    onClick={handlePrevious}
                    className={cn('mc-pagination__button mc-pagination__button--previous', {
                        'is-disabled': currentPage === 1
                    })}
                    aria-label="Previous page"
                    role="button"
                    tabIndex={0}
                >
                    <svg className="mc-pagination__button-icon">
                        <use xlinkHref="#iconLeftL" />
                    </svg>
                </div>
                {!isCompact && (
                    <div className="mc-pagination__field">
                        <select className="mc-select mc-pagination__select" onChange={handleChangePage} value={currentPage}>
                            {Array.from(Array(pagesNumber), (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {`Page ${i + 1} of ${pagesNumber}`}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div
                    onClick={handleNext}
                    className={cn('mc-pagination__button mc-pagination__button--next', {
                        'is-disabled': currentPage === pagesNumber
                    })}
                    aria-label="Next Page"
                    role="button"
                    tabIndex={0}
                >
                    <svg className="mc-pagination__button-icon">
                        <use xlinkHref="#iconRightL" />
                    </svg>
                </div>
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
export default Pagination;
