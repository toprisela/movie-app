import path from 'path';

export default {
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'js', 'index.js'),
    output: {
        path: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'src', 'js')
                ],
                loaders: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}