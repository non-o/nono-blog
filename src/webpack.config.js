//check also https://webpack.github.io/docs/webpack-dev-server.html
var path = require('path');

var webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'public')
};

module.exports = {
    devtool: 'eval-source-map',    
    entry: {
		main: [
			'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
			'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
			path.resolve(__dirname, 'app/main.js') // Your appʼs entry point
		]
	},
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
        // publicPath: '/public/'
    },
    devServer: {
        hot: true,
        inline: true,
        progress: true,
        historyApiFallback: true,
        stats: 'errors-only',
        port: process.env.PORT,
        host: process.env.HOST
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: PATHS.app,
                loader: 'react-hot!babel'
            }
        ]
    }
};