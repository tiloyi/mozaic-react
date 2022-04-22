import React, { useMemo } from 'react';
import { Story } from '@storybook/react';
import Pagination from './Pagination';
import { IPaginationProps } from './Pagination.types';
import View from '../View/index';
import { usePagination } from '../../hooks';
import { chunk } from 'lodash';

export const PaginationTemplate: Story<IPaginationProps> = args => {
    const { handleChangePage, handleNext, handlePrevious, currentPage, itemsPerPage } = usePagination();
    const initialItems = Array.from(Array(30), (_e, i) => i);
    const chunkItems = chunk(initialItems, itemsPerPage);
    const itemsPage: (number | string | Record<string, string>)[] = useMemo(
        () => chunkItems[currentPage - 1],
        [chunkItems, currentPage]
    );
    const pagesNumber: number = useMemo(() => chunkItems.length, [chunkItems]);

    return (
        <View>
            <View>
                {itemsPage.map(e => (
                    <div key={e as number}>Element {e}</div>
                ))}
            </View>
            <View>
                <Pagination
                    {...args}
                    pagesNumber={pagesNumber}
                    currentPage={currentPage}
                    handleChangePage={handleChangePage}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                />
            </View>
        </View>
    );
};

export const Controls = PaginationTemplate.bind({});

Controls.args = {
    className: 'pagination'
};

export const argTypes = {
    isCompact: {
        control: {
            type: 'boolean'
        }
    }
};
