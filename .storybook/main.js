const path = require('path');
const pathToIcons = path.resolve(__dirname, '../src/resources/icons');

module.exports = {
  webpackFinal: async (config) => {
    const rules = config.module.rules;

    rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
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
