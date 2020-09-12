module.exports = {
    env: {
        browser: true,
        // es2021: true,
        browser: true,
        es6: true,
        commonjs: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: './tsconfig.json',

    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "indent": ["error", 4],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "react/jsx-indent": ["error", 4]

    }
};
