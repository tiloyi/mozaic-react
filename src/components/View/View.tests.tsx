import React from 'react';
import { render, screen } from '@testing-library/react';
import { MagicUnit } from '../../constants';
import View from './View';

const magicUnits = Object.values(MagicUnit);

describe('components/View', () => {
    test('renders correctly', () => {
        render(<View>Test</View>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test.each(magicUnits)('renders with padding=%s', padding => {
        render(<View padding={padding}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-p-${padding}`);
    });

    test.each(magicUnits)('renders with padding-top=%s', paddingTop => {
        render(<View paddingTop={paddingTop}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pt-${paddingTop}`);
    });

    test.each(magicUnits)('renders with padding-right=%s', paddingRight => {
        render(<View paddingRight={paddingRight}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pr-${paddingRight}`);
    });

    test.each(magicUnits)('renders with padding-bottom=%s', paddingBottom => {
        render(<View paddingBottom={paddingBottom}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pb-${paddingBottom}`);
    });

    test.each(magicUnits)('renders with padding-left=%s', paddingLeft => {
        render(<View paddingLeft={paddingLeft}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pl-${paddingLeft}`);
    });

    test.each(magicUnits)('renders with margin=%s', margin => {
        render(<View margin={margin}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-m-${margin}`);
    });

    test.each(magicUnits)('renders with margin-top=%s', marginTop => {
        render(<View marginTop={marginTop}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-mt-${marginTop}`);
    });

    test.each(magicUnits)('renders with margin-right=%s', marginRight => {
        render(<View marginRight={marginRight}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-mr-${marginRight}`);
    });

    test.each(magicUnits)('renders with margin-bottom=%s', marginBottom => {
        render(<View marginBottom={marginBottom}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-mb-${marginBottom}`);
    });

    test.each(magicUnits)('renders with margin-left=%s', marginLeft => {
        render(<View marginLeft={marginLeft}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-ml-${marginLeft}`);
    });
});
