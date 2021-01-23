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
        "airbnb",
        "eslint:recommended",
        "plugin:import/warnings",
        "plugin:import/errors",
        "plugin:import/typescript"
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
        "@typescript-eslint",
        "jsx-a11y",
        "import"
    ],
    // "settings": {
    //     "import/extensions": [
    //         ".js",
    //         ".jsx",
    //         ".ts", 
    //         ".tsx"
    //         ]
    // },
    rules: {
        "indent": [2, "tab", { "ignoredNodes": ["JSXElement"] }],
        "react/jsx-indent": [2, "tab"],
        "react/no-array-index-key": [2],
        "react/jsx-indent-props": [2, "tab"],
        "react/jsx-filename-extension": [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "import/extensions": [2, "never"],
        "react/destructuring-assignment": [2, "always"],
        "no-tabs": 0,
        "object-curly-newline": [2, "never"],
        "no-mixed-spaces-and-tabs":[2, "smart-tabs"],
        "import/order": [2, {"groups": ["index", "sibling", "parent", "internal", "external", "builtin", "object"]}],
        "max-lines":[2, {"max": 300}],
        "object-property-newline":[2, { "allowAllPropertiesOnSameLine":false}]
        


    }
};
