module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "6",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 2],
        "quotes": [
            "error",
            "single"
        ],
        "no-console": { "allow": ["log"] },
        "semi": [
            "error",
            "never"
        ]
    }
};