import './styles.scss';

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*'
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        },
        exclude: ['className']
    },
    options: {
        storySort: {
            order: ['About', 'Components']
        }
    },
    backgrounds: {
        default: 'mozaic',
        values: [
            {
                name: 'mozaic',
                value: '#eeeef0'
            },
            {
                name: 'default',
                value: '#ffffff'
            }
        ]
    }
};
