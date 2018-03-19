const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /index\.pug$/,
                use: [
                    {loader: 'file-loader', options: {name: 'index.html'}},
                    {loader: 'pug-extract-loader', options: {locals: {}}},
                    {loader: 'pug-loader', options: {pretty: true}}
                ]
            },
            {
                test: /\.pug$/,
                include: [path.resolve(__dirname, 'src', 'parts')],
                loaders: [
                    {loader: 'pug-loader', options: {pretty: true, doctype: 'html'}},
                ]
            },
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {loader: 'file-loader', options: {name: 'fonts/[name].[ext]'}}
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: {loader: 'file-loader', options: {name: 'assets/[name].[ext]'}}
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.ts$/, loader: 'awesome-typescript-loader'},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([ { from: 'assets', to: 'assets' } ])
    ]
};