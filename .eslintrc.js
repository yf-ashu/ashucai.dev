module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
        commonjs: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:import/warnings',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import'],
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        'no-unused-vars': [1],
        'react/no-array-index-key': [2],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/extensions': [2, 'never'],
        'import/order': [2, { groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object'] }],
        'max-lines': [2, { max: 300 }],
        'react/function-component-definition': 0,
        'react/jsx-props-no-spreading': [0],
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: true,
                jsxBracketSameLine: true,
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'es5',
                useTabs: false,
            },
        ],
    },
};
