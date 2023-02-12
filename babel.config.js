module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  moduleResolver: {
    plugins: [
      [
        'module-resolver',
        {
          // root: ['./src'],
          alias: {
            screens: './src/screens',
            components: './src/components',
            redux: './src/redux',
          },
        },
      ],
    ],
  },
};
