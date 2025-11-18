/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.cjs',
    format: 'cjs',
    sourcemap: true
  }
};
