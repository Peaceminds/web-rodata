module.exports = {
    entry:  './src',
    output: {
        path:     __dirname + '/builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname + '/static',
            }
        ],
    }
};
