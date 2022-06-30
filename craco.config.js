const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '~/': path.resolve(__dirname, './src/'),
            '~/pages': path.resolve(__dirname, './src/pages'),
            '~/components': path.resolve(__dirname, './src/components'),
            '~/layouts': path.resolve(__dirname, './src/layouts'),
        },
    },
};
