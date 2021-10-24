import { IViewProps } from '../View/View.types';

export enum FlexDirection {
    Row = 'row',
    RowReverse = 'row-reverse',
    Column = 'column',
    ColumnReverse = 'column-reverse'
}

export interface IFlexProps extends IViewProps {
    direction?: FlexDirection;
}
