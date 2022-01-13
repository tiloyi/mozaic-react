import React from 'react';
import { Story } from '@storybook/react';
import { IDataTableProps } from './DataTable.types';
import DataTable from './DataTable';

const Template: Story<IDataTableProps> = args => <DataTable {...args}/>;

export const DataTableStory = Template.bind({});

DataTableStory.args = {};

export const argTypes = {};
