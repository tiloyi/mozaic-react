const plugins = require('@mozaic-ds/css-dev-tools/postcssPluginConfig');
const syntax = require('postcss-scss');

module.exports = ({ config }) => {
    const svgRule = config.module.rules.find(rule => !Array.isArray(rule.test) && rule.test.test('.svg'));

    svgRule.exclude = /\.svg$/;

    config.module.rules.push(
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            syntax,
                            plugins
                        }
                    }
                }
            ]
        },
        {
            test: /\.svg$/,
            issuer: /\.tsx?$/,
            use: ['@svgr/webpack', 'url-loader']
        }
    );

    return config;
};
