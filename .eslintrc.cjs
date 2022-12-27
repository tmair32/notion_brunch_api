module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
