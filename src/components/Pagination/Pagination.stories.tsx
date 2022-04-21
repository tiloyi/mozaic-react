import React from 'react';
import { Story } from '@storybook/react';
import Pagination from './Pagination';
import { IPaginationProps } from './Pagination.types';
import View from '../View/index';
import { usePagination } from '../../hooks';

export const PaginationTemplate: Story<IPaginationProps> = args => {
    const initialItems = Array.from(Array(30), (_e, i) => i);
    const { handlePage, handleNext, handlePrevious, currentPage, pagesNumber, items } = usePagination(
        initialItems as []
    );

    return (
        <View>
            <View>
                {items.map(e => (
                    <div key={e as number}>Element {e}</div>
                ))}
            </View>
            <View>
                <Pagination
                    {...args}
                    pagesNumber={pagesNumber}
                    currentPage={currentPage}
                    handlePage={handlePage}
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
