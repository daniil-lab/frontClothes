const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "Components": path.resolve(__dirname, 'src/Components/'),
      "Pages": path.resolve(__dirname, 'src/Pages/'),
      "Utils": path.resolve(__dirname, 'src/Utils/'),
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(s*)css$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader'
            }
        ],
    },
    {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
              }
          }
        ]
    },
    {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'images/[hash]-[name].[ext]',
                },
            },
        ],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,"src", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  }
};