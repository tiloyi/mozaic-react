export interface IBasicFixture {
    id: number;
    name: string;
    count: number;
}

export function generateBasicRows(limit = 10, offset = 0): Array<IBasicFixture> {
    return Array.from({ length: limit }).map((_: unknown, index: number) => {
        const id = index + offset;

        return {
            id,
            name: `Product name #${id}`,
            count: 1e6 + id
        };
    });
}

export interface ICustomCellFixture extends IBasicFixture {
    date: Date;
    status: 'success' | 'failure';
}

export function generateCustomCellRows(limit = 10, offset = 0): Array<ICustomCellFixture> {
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

//
// export const columns: Array<IDataTableColumn<IDataTableFixture>> = [
//     {
//         label: 'Id',
//         key: 'id'
//     },
//     {
//         label: 'Name',
//         key: 'name'
//     },
//     {
//         label: 'Count',
//         key: 'count'
//         // variant: 'number'
//     },
//     // {
//     //     label: 'Date',
//     //     key: 'date'
//     //     // rowCellRender: (row: IDataTableFixture) => row.date.toLocaleDateString()
//     // },
//     {
//         label: 'Status',
//         key: 'status'
//         // rowCellRender: (row: IDataTableFixture) => (
//         //     <Badge theme={row.status === 'success' ? 'success' : 'danger'}>{row.status}</Badge>
//         // )
//     }
// ];
