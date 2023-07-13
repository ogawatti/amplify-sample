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
      "./tsconfig.json",
    ],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "dist",
    "**/*.js",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "after": true, "before": false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-trailing-spaces": "error",
    "comma-dangle": ["error", "always-multiline"],
    "quotes": [2, "single", { "avoidEscape": true }],
    "no-trailing-spaces": "error",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ]
  },
};
