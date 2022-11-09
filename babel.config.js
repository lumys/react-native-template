module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
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
          '~': './src',
          '@images': './src/lib/assets/images',
          '@hooks': './src/lib/hooks',
          '@helpers': './src/lib/helpers',
          '@constants': './src/lib/constants',
          '@styles': './src/lib/styles',
          '@initializer': './src/lib/initializer',
        },
      },
    ],
    ['babel-plugin-styled-components'],
    ['react-native-reanimated/plugin'],
  ],
};
