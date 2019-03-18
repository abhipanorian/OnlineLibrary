var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var serverConfig = require('./serverConfig');

var config = {
    devServer: serverConfig,
    mode: 'development', //'production'
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["react", "es2015", "stage-2"]
                    }
                }
            },
            {
                test: /\.scss/,
                include: SRC_DIR,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};

module.exports = config;