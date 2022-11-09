const path = require('path');

module.exports = {
  resolve: {
    root: ['./src'],
    extensions: [
      '.ios.ts',
      '.android.ts',
      '.ts',
      '.ios.tsx',
      '.android.tsx',
      '.tsx',
      '.jsx',
      '.js',
      '.json',
    ],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '@images': path.resolve(__dirname, 'src/lib/assets/images'),
      '@hooks': path.resolve(__dirname, 'src/lib/hooks'),
      '@helpers': path.resolve(__dirname, 'src/lib/helpers'),
      '@constants': path.resolve(__dirname, 'src/lib/constants'),
      '@styles': path.resolve(__dirname, 'src/lib/styles'),
      '@initializer': path.resolve(__dirname, 'src/lib/initializer'),
    },
  },
};
