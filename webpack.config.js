import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'src', 'js', 'index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), //Handles error messages in more cleaner way
        new webpack.optimize.OccurrenceOrderPlugin(), //Ensures consistent build hashes
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'src', 'js'),
                    path.join(__dirname, 'server', 'shared')
                ],
                loaders: ['react-hot-loader', 'babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}