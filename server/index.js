import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import users from './routes/users';

//mongodb
import mongoose from 'mongoose';

let app = express();

const compiler = webpack(webpackConfig);

//middlewares
app.use(webpackMiddleware(compiler, {
    hot:true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true //Display no info to console. Only warnings and errors
}));
app.use(webpackHotMiddleware(compiler))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.use(bodyParser.json());

//
app.use('/api/users', users);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://tomislav.priselac:MyPassword@ds145009.mlab.com:45009/movieappdb', (err) => {
    if (err) {
        return console.log(err);
    }

    app.listen(3000, () => {
        console.log('Started server on localhost:3000')
    });
}); 

