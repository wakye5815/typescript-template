module.exports = {
    "env": {
        "es6": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    "globals": {
        "Atomics": 'readonly',
        "SharedArrayBuffer": 'readonly',
    },
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": 'module',
    },
    "plugins": ['@typescript-eslint'],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "semi": true,
                "singleQuote": true,
                "printWidth": 120,
                "trailingComma": "all"
            }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-parameter-properties":"off",
        "linebreak-style": [
            "error",
            "unix"
        ]
    }
};