import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';

export default [
    {
        input: ['src/index.ts'],
        output: {
            exports: 'named',
            format: 'esm',
            dir: 'lib',
            preserveModules: true,
            preserveModulesRoot: 'src'
        },
        plugins: [peerDeps(), resolve(), commonjs(), typescript()]
    }
];
