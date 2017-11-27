module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
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
			"curly": "error",
        "indent": [
            "error",
            "tab",
            {SwitchCase: 1}
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "no-undef": "off",
        "no-unused-vars": "off",
        "semi": [
            "error",
            "always"
        ]
    }
};