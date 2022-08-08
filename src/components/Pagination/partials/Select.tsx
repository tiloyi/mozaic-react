import React from 'react';

const PaginationSelect = ({ isDisabled, currentPage }: { isDisabled?: boolean; currentPage: number }): JSX.Element => (
    <div className="mc-pagination__field">
        <select className="mc-select mc-pagination__select" disabled={isDisabled}>
            <option value="1">Page 1 of 99</option>
            <option value="2">Page 2 of 99</option>
            <option value="3">Page x of 99</option>
            <option value="99">Page 99 of 99</option>
        </select>
    </div>
);

export default PaginationSelect;
