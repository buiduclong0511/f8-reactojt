const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '~/': path.resolve(__dirname, './src/'),
            '~/pages': path.resolve(__dirname, './src/pages'),
            '~/components': path.resolve(__dirname, './src/components'),
            '~/layouts': path.resolve(__dirname, './src/layouts'),
            '~/config': path.resolve(__dirname, './src/config'),
            '~/routes': path.resolve(__dirname, './src/routes'),
            '~/modules': path.resolve(__dirname, './src/modules'),
            '~/hooks': path.resolve(__dirname, './src/hooks'),
            '~/api': path.resolve(__dirname, './src/api'),
            '~/redux': path.resolve(__dirname, './src/redux'),
            '~/validations': path.resolve(__dirname, './src/validations'),
        },
    },
};
