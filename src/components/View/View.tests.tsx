import React from 'react';
import { render, screen } from '@testing-library/react';
import View, { sanitize } from './View';
import { magicUnits, radiuses, shadows } from './View.types';

describe('components/View', () => {
    test('renders correctly', () => {
        render(<View>Test</View>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test.each(magicUnits)('renders with padding=%s', padding => {
        render(<View padding={padding}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-p-${sanitize(padding)}`);
    });

    test.each(magicUnits)('treats all equal paddings as padding %s', padding => {
        render(
            <View paddingTop={padding} paddingRight={padding} paddingBottom={padding} paddingLeft={padding}>
                Test
            </View>
        );

        expect(screen.getByText('Test')).toHaveClass(`mu-p-${sanitize(padding)}`);
    });

    test.each(magicUnits)('treats vertical padding %s and horizontal padding %s as padding %s', padding => {
        render(
            <View paddingVertical={padding} paddingHorizontal={padding}>
                Test
            </View>
        );

        expect(screen.getByText('Test')).toHaveClass(`mu-p-${sanitize(padding)}`);
    });

    test.each(magicUnits)('renders with padding-top=%s', paddingTop => {
        render(<View paddingTop={paddingTop}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pt-${sanitize(paddingTop)}`);
    });

    test.each(magicUnits)('renders with padding-right=%s', paddingRight => {
        render(<View paddingRight={paddingRight}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pr-${sanitize(paddingRight)}`);
    });

    test.each(magicUnits)('renders with padding-bottom=%s', paddingBottom => {
        render(<View paddingBottom={paddingBottom}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pb-${sanitize(paddingBottom)}`);
    });

    test.each(magicUnits)('renders with padding-left=%s', paddingLeft => {
        render(<View paddingLeft={paddingLeft}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pl-${sanitize(paddingLeft)}`);
    });

    test.each(magicUnits)('renders with vertical padding %s', padding => {
        render(<View paddingVertical={padding}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-pv-${sanitize(padding)}`);
    });

    test.each(magicUnits)('treats padding-top=%s and padding-bottom=%s as vertical padding %s', padding => {
        render(
            <View paddingTop={padding} paddingBottom={padding}>
                Test
            </View>
        );

        expect(screen.getByText('Test')).toHaveClass(`mu-pv-${sanitize(padding)}`);
    });

    test.each(magicUnits)('renders with horizontal padding %s', padding => {
        render(<View paddingHorizontal={padding}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-ph-${sanitize(padding)}`);
    });

    test.each(magicUnits)('treats padding-right=%s and padding-left=%s as horizontal padding %s', padding => {
        render(
            <View paddingRight={padding} paddingLeft={padding}>
                Test
            </View>
        );

        expect(screen.getByText('Test')).toHaveClass(`mu-ph-${sanitize(padding)}`);
    });

    test.each(magicUnits)('renders with margin=%s', margin => {
        render(<View margin={margin}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-m-${sanitize(margin)}`);
    });

    test.each(magicUnits)('treats all equal margins as margin %s', margin => {
        render(
            <View marginTop={margin} marginRight={margin} marginBottom={margin} marginLeft={margin}>
                Test
            </View>
        );

        expect(screen.getByText('Test')).toHaveClass(`mu-m-${sanitize(margin)}`);
    });

    test.each(magicUnits)('treats vertical margin %s and horizontal margin %s as margin %s', margin => {
        render(
            <View marginVertical={margin} marginHorizontal={margin}>
                Test
            </View>
        );

        expect(screen.getByText('Test')).toHaveClass(`mu-m-${sanitize(margin)}`);
    });

    test.each(magicUnits)('renders with margin-top=%s', marginTop => {
        render(<View marginTop={marginTop}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-mt-${sanitize(marginTop)}`);
    });

    test.each(magicUnits)('renders with margin-right=%s', marginRight => {
        render(<View marginRight={marginRight}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-mr-${sanitize(marginRight)}`);
    });

    test.each(magicUnits)('renders with margin-bottom=%s', marginBottom => {
        render(<View marginBottom={marginBottom}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-mb-${sanitize(marginBottom)}`);
    });

    test.each(magicUnits)('renders with margin-left=%s', marginLeft => {
        render(<View marginLeft={marginLeft}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-ml-${sanitize(marginLeft)}`);
    });

    test.each(magicUnits)('renders with vertical margin %s', margin => {
        render(<View marginVertical={margin}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-mv-${sanitize(margin)}`);
    });

    test.each(magicUnits)('treats margin-top=%s and margin-bottom=%s as vertical margin %s', margin => {
        render(
            <View marginTop={margin} marginBottom={margin}>
                Test
            </View>
        );

        expect(screen.getByText('Test')).toHaveClass(`mu-mv-${sanitize(margin)}`);
    });

    test.each(magicUnits)('renders with horizontal margin %s', margin => {
        render(<View marginHorizontal={margin}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mu-mh-${sanitize(margin)}`);
    });

    test.each(magicUnits)('treats margin-right=%s and margin-left=%s as horizontal margin %s', margin => {
        render(
            <View marginRight={margin} marginLeft={margin}>
                Test
            </View>
        );

        expect(screen.getByText('Test')).toHaveClass(`mu-mh-${sanitize(margin)}`);
    });

    test.each(shadows)('renders with shadow=%s', shadow => {
        render(<View shadow={shadow}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mt-shadow-${shadow}`);
    });

    test.each(radiuses)('renders with radius=%s', radius => {
        render(<View radius={radius}>Test</View>);

        expect(screen.getByText('Test')).toHaveClass(`mt-radius-${radius}`);
    });
});
