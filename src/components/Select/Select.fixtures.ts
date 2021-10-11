import { ISelectOption, ISelectOptionGroup } from './Select.types';

export const languages: Array<ISelectOption> = [
    {
        label: 'C#',
        value: 'csharp'
    },
    {
        label: 'Python',
        value: 'python'
    },
    {
        label: 'Ruby',
        value: 'ruby'
    },
    {
        label: 'Java',
        value: 'java'
    },
    {
        label: 'Haskell',
        value: 'haskell'
    },
    {
        label: 'SQL',
        value: 'sql',
        isDisabled: true
    }
];

export const food: Array<ISelectOptionGroup> = [
    {
        label: 'Vegetables',
        options: [
            {
                label: 'Potato',
                value: 'potato'
            },
            {
                label: 'Carrot',
                value: 'carrot'
            },
            {
                label: 'Pumpkin',
                value: 'pumpkin'
            },
            {
                label: 'Cucumber',
                value: 'cucumber',
                isDisabled: true
            },
            {
                label: 'Cabbage',
                value: 'cabbage'
            }
        ]
    },
    {
        label: 'Fruits',
        options: [
            {
                label: 'Apple',
                value: 'apple'
            },
            {
                label: 'Pear',
                value: 'pear'
            },
            {
                label: 'Orange',
                value: 'orange'
            },
            {
                label: 'Lemon',
                value: 'lemon'
            },
            {
                label: 'Banana',
                value: 'banana'
            }
        ]
    },
    {
        label: 'Berries',
        options: [
            {
                label: 'Blueberry',
                value: 'blueberry'
            },
            {
                label: 'Blackberry',
                value: 'blackberry'
            },
            {
                label: 'Strawberry',
                value: 'strawberry'
            }
        ],
        isDisabled: true
    }
];
