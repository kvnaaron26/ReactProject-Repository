module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    },
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
  },
};
