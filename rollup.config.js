import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import {
	terser
} from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

export default [
	{
		input: 'src/index.js',
		output: [
			{ file: pkg.module, format: 'es', name },
			{ file: pkg.main, format: 'umd', name },
		],
		plugins: [
			svelte({
				preprocess: sveltePreprocess()
			}),
			resolve(),
			production && terser()
		],
	}
]