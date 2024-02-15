/**
 * Rollup Config
 *
 * Prerequisites:
 *   npm i -g rollup @rollup/plugin-node-resolve
 *   npm link @rollup/plugin-node-resolve
 *
 * Use with:
 *   rollup -c rollup.js
 *
 * package.json:
 *   {
 *     "type": "module",
 *     "exports": {
 *       "import": "./dist/import/bundle.mjs",
 *       "require": "./dist/require/bundle.cjs"
 *     },
 *   }
 *
 */

import rNode from '@rollup/plugin-node-resolve';

const output = {
	name: '',
	sourcemap: true,
	indent: false,
};

export default {
	input: 'src/main.js',
	output: [
		{
			file: 'dist/import/bundle.mjs',
			format: 'es',
			...output
		},
		{
			file: 'dist/require/bundle.cjs',
			format: 'cjs',
			...output
		},
	],
	treeshake: true,
	plugins: [
		rNode({ // support importing npm packages
			browser: false,
		}),
	],
};
