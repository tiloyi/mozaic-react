import React from 'react';
import Badge from '../Badge';
import { IDataTableColumn } from './DataTable.types';

export interface IDataTableFixture {
    id: number;
    name: string;
    count: number;
    date: Date;
    status: 'success' | 'failure';
}

export function generateDataTableRows(limit = 10, offset = 0): Array<IDataTableFixture> {
    return Array.from({ length: limit }).map((_: unknown, index: number) => {
        const id = index + offset;

        return {
            id,
            name: `Name #${id}`,
            count: 1e6 + id,
            date: new Date(),
            status: id % 2 ? 'success' : 'failure'
        };
    });
}

export function getRowKey(fixture: IDataTableFixture): number {
    return fixture.id;
}

export const columns: Array<IDataTableColumn<IDataTableFixture>> = [
    {
        title: 'Id',
        key: 'id'
    },
    {
        title: 'Name',
        key: 'name'
    },
    {
        title: 'Count',
        key: 'count'
    },
    {
        title: 'Date',
        key: 'date',
        render: (row: IDataTableFixture) => row.date.toLocaleDateString()
    },
    {
        title: 'Status',
        key: 'status',
        render: (row: IDataTableFixture) => (
            <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
        )
    }
];
