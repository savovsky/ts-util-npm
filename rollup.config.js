// https://www.thisdot.co/blog/how-to-setup-a-typescript-project-using-rollup-js/

import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

export default merge(baseConfig, {
    input: './out-tsc/src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'auto',
        },
        {
            file: packageJson.main,
            format: 'esm',
            sourcemap: true,
            exports: 'auto',
        },
    ],
});
