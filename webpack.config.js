const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'Undisclosed design system',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    assetModuleFilename: '[name][ext]',
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') },
          },
        ],
        include: /\.module\.s?css$/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') },
          },
        ],
        exclude: /\.module\.s?css$/,
      },
      {
        test: /\.(woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
};
