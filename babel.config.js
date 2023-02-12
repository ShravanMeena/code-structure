module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@ui': './src/ui',
          '@utils': './src/utils',
          '@redux': './src/redux',
          '@navigations': './src/navigations',
          '@config': './src/config',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@api': './src/api',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
