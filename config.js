import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'index.js',
  output: {
    file: 'build/index.js',
    format: 'umd',
    name: 'Kinetic'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          'babel-preset-env',
          {
            targets: {
              browsers: ['last 2 versions', 'ie >= 8']
            },
            modules: false
          }
        ]
      ],
      plugins: [
        'external-helpers',
        'transform-object-assign'
      ]
    }),
    uglify()
  ]
}
