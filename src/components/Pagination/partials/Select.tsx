import React, { ChangeEvent } from 'react';
import { usePaginationContext } from '../PaginationContext';

const PaginationSelect = (): JSX.Element | null => {
    const { currentPage, pagesTotal, isCompact, isDisabled, onChange } = usePaginationContext();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => onChange?.(Number(event.target.value));

    if (isCompact) {
        return null;
    }

    return (
        <div className="mc-pagination__field">
            {/* eslint-disable-next-line jsx-a11y/no-onchange */}
            <select
                className="mc-select mc-pagination__select"
                value={currentPage}
                disabled={isDisabled}
                onChange={handleChange}
            >
                <option value="1">Page 1 of {pagesTotal}</option>
                <option value="2">Page 2 of {pagesTotal}</option>
                <option value="3">Page x of {pagesTotal}</option>
                <option value="99">
                    Page {pagesTotal} of {pagesTotal}
                </option>
            </select>
        </div>
    );
};

export default PaginationSelect;
