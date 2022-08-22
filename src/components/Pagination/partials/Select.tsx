import React, { ChangeEvent } from 'react';
import { usePaginationContext } from '../PaginationContext';
import Select from '../../Select';

const PaginationSelect = (): JSX.Element | null => {
    const { currentPage, options, isCompact, isDisabled, onChange } = usePaginationContext();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => onChange?.(Number(event.target.value));

    if (isCompact) {
        return null;
    }

    return (
        <div className="mc-pagination__field">
            <Select
                className="mc-pagination__select"
                value={currentPage}
                options={options ?? []}
                isDisabled={isDisabled}
                onChange={handleChange}
            />
        </div>
    );
};

export default PaginationSelect;
