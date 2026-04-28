import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
