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

export interface ISelectableFixture extends IBasicFixture {
    isSelected: boolean;
}

export function generateSelectableRows(limit = 10, offset = 0): Array<ISelectableFixture> {
    return Array.from({ length: limit }).map((_: unknown, index: number) => {
        const id = index + offset;

        return {
            id,
            name: `Name #${id}`,
            count: 1e6 + id,
            isSelected: false
        };
    });
}

export interface IExpandableFixture extends IBasicFixture {
    isExpanded: boolean;
    products: IExpandableSubtable[];
}

export interface IExpandableSubtable {
    id: number;
    label: string;
    quantity: number;
}

export function generateSubtable(limit = 10, offset = 0): Array<IExpandableSubtable> {
    return Array.from({ length: limit }).map((_: unknown, index: number) => {
        const id = index + offset;

        return {
            id,
            label: `Label: ${id}`,
            quantity: 10 + id
        };
    });
}

export function generateExpandableRows(limit = 10, offset = 0): Array<IExpandableFixture> {
    return Array.from({ length: limit }).map((_: unknown, index: number) => {
        const id = index + offset;

        return {
            id,
            name: `Name #${id}`,
            count: 1e6 + id,
            isExpanded: false,
            products: generateSubtable(3)
        };
    });
}
