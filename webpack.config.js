const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['accordeon', 'tabs', 'product', 'swiperSlider','weatherWidget','learnJs'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});

var clientConfig = (function webpackConfig() {
    const publicPath = 'dist/';

    var config = Object.assign({});
    config.entry = {
        index: './src/js/index.js',
        accordeon: './src/js/accordeon.js',
        tabs: './src/js/tabs.js',
        product: './src/js/product.js',
        swiperSlider: './src/js/swiperSlider.js',
        weatherWidget: './src/js/weatherWidget.js',
        learnJs: './src/js/learnJs.js'
    }
    config.output = {
        path: path.resolve(__dirname, publicPath),
        //filename: 'index.js'
    };

    config.optimization = {
        minimize: true
    };

    config.module = {
        rules: [
            {
                test: /\.js$/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                loader: 'file-loader',
                options: { name: 'assets/image/[name].[ext]' }
            },
            {
                test: /\.(ttf|woff)$/,
                loader: 'file-loader',
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }  
            
        ]
    };

    config.plugins = [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index']
        })  
    ].concat(multipleHtmlPlugins);

    return config;
});

module.exports = clientConfig;