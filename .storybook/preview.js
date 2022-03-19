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
        default: 'light',
        values: [
            {
                name: 'mozaic',
                value: '#eeeef0'
            },
            {
                name: 'light',
                value: '#ffffff'
            },
            {
                name: 'dark',
                value: '#222020'
            }
        ]
    }
};
