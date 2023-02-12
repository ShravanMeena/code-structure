const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

const moduleResolver = {
  plugins: [
    [
      'module-resolver',
      {
        // root: ['./src'],
        alias: {
          components: './src/components',
          redux: './src/redux',
        },
      },
    ],
  ],
};

module.exports = {
  presets,
  plugins,
  moduleResolver,
};
