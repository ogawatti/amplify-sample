module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: [
      "./tsconfig.eslint.json",
      "./**/*.ts",
    ],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "dist",
    "**/*.js",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "import/prefer-default-export": "off",
  },
};
