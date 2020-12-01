import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-scss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import svg from 'rollup-plugin-svg'
import {terser} from 'rollup-plugin-terser'
import postcss from 'postcss';

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: ['src/_bundle/main.js', 'src/_bundle/pages/index/index.js'],
  output: {
    sourcemap: false,
    name: 'main',
    dir: 'dist/assets/',
  },
  plugins: [
    replace({
      DEV_MODE: dev,
    }),
    scss({
      processor: css => postcss([
        require('postcss-import'),
        require('postcss-custom-media'),
        require('postcss-nested'),
        require('autoprefixer'),
      ]),
      output: 'dist/assets/main.bundle.css',
      watch: 'src/_bundle/'

    }),
    svelte({
      dev,
    }),
    svg(),
    resolve({
      browser: true,
      dedupe: (importee) =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    !dev && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
