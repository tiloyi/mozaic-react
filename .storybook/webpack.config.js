const plugins = require('@mozaic-ds/css-dev-tools/postcssPluginConfig');
const syntax = require('postcss-scss');

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                postcssOptions: {
                    syntax,
                    plugins
                }
            }
        ]
    });

    return config;
};
