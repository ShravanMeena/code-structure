module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
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
          '@src/config': './src/config',
          '@src/navigation': './src/navigation',
          '@src/screens': './src/screens',
          '@src/utils': './src/utils',
          '@src/assets': './assets',
          '@src/components': './components',
        },
      },
    ],
  ],
};
