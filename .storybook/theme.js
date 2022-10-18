import { create } from '@storybook/theming';
import logo from './logo.svg';

export default create({
    base: 'light',
    appBg: '#eeeef0',
    appContentBg: 'white',
    brandTitle: 'React implementation of the Mozaic Design System',
    brandUrl: 'https://adeo.github.io/mozaic-react/',
    brandImage: logo
});
