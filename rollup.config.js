import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: ['src/index.ts'],
        output: {
            exports: 'named',
            dir: 'lib'
        },
        plugins: [resolve(), commonjs(), typescript()]
    }
];
