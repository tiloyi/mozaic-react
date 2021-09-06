import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

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
        plugins: [resolve(), commonjs(), typescript()]
    }
];
