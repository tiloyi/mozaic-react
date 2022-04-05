import { IDataTableFixture } from './DataTable.types';

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
    return fixture.id + 100;
}
