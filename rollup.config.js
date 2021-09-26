import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcssPlugins from '@mozaic-ds/css-dev-tools/postcssPluginConfig';
import postcssSyntax from 'postcss-scss';

export default [
    {
        input: ['src/index.ts'],
        output: {
            exports: 'named',
            format: 'cjs',
            dir: 'lib',
            preserveModules: true,
            preserveModulesRoot: 'src'
        },
        plugins: [
            peerDeps(),
            resolve(),
            postcss({
                plugins: postcssPlugins,
                syntax: postcssSyntax,
                extract: true,
                minimize: true,
                use: [
                    [
                        'sass',
                        {
                            includePaths: [
                                './node_modules/',
                                './node_modules/@mozaic-ds/styles/',
                                './node_modules/@mozaic-ds/tokens/build/scss/',
                                './node_modules/@mozaic-ds/styles/components/',
                                './node_modules/@mozaic-ds/styles/generic/',
                                './node_modules/@mozaic-ds/styles/layouts/',
                                './node_modules/@mozaic-ds/styles/settings-tools/',
                                './node_modules/@mozaic-ds/styles/typography/',
                                './node_modules/@mozaic-ds/styles/utilities/'
                            ]
                        }
                    ]
                ]
            }),
            commonjs(),
            typescript()
        ]
    }
];
