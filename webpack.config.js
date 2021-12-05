const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const { resolve } = require('path');

module.exports = {
    entry: {
        main: resolve(__dirname, 'src/main.js'),
        // api_maps: "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=07762372-db5e-4157-99e7-d135842ac166",
        drawYmap: resolve(__dirname, 'src/drawYmap.js'),
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname + "/dist"),
        clean: true
    },
    externals: {
        api_maps: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=07762372-db5e-4157-99e7-d135842ac166', // no properties here
        web: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "src/index.html"),
        }),
    ],
};