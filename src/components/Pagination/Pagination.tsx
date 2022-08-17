import React from 'react';
import {
    PaginationContainer,
    PaginationSelect,
    PaginationNextPageButton,
    PaginationPreviousPageButton
} from './partials';
import { IPaginationProps } from './Pagination.types';
import './Pagination.scss';

const Pagination = (props: IPaginationProps): JSX.Element => (
    <PaginationContainer {...props}>
        <PaginationPreviousPageButton />
        <PaginationSelect />
        <PaginationNextPageButton />
    </PaginationContainer>
);

export default Pagination;
