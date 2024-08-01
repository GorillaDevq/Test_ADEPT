module.exports = {
    'root': true,
    'extends': [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 2015,
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'env': {
        'es6': true,
        'browser': true,
        'node': true
    },
    'plugins': [
        '@typescript-eslint',
        'react'
    ],
    'rules': {
        indent: [2, 4],
        'import/extensions': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-fallthrough': 'off',
        'no-multiple-empty-lines': [ 1,  { 'max': 2 } ],
        'no-nested-ternary': 1,
        'eqeqeq': 2,
        'react/prop-types': 'off'
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
