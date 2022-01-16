import React from 'react';
import { Story } from '@storybook/react';
import { IDataTableProps } from './DataTable.types';
import { generateDataTableRows, columns, getRowKey, IDataTableFixture } from './DataTable.fixtures';
import DataTable from './DataTable';

const Template: Story<IDataTableProps<IDataTableFixture>> = args => <DataTable {...args} />;

export const DataTableStory = Template.bind({});

DataTableStory.args = {
    rows: generateDataTableRows(50),
    columns,
    getRowKey
};

export const argTypes = {};
