const path = require('path');
const sass = require('sass');
const pathToIcons = path.resolve(__dirname, '../src/resources/icons');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    const rules = config.module.rules;

    rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: sass,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToIcons;
    rules.push({
      test: /\.svg$/,
      include: pathToIcons,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });

    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
