import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {
      eqeqeq: "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
        },
        {
          selector: "variable",
          format: ["camelCase"],
        },
        {
          selector: "function",
          format: ["camelCase"],
        },
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
      ],
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportDefaultDeclaration",
          message: "Prefer named exports",
        },
        // Testar as regras abaixo:
        {
          selector:
            "ImportDeclaration[source.value=/^[^./]/] ~ ImportDeclaration[source.value=/^[./]/]",
          message: "Builtin imports must come before external imports",
        },
        {
          selector:
            "ImportDeclaration[source.value=/^[./]/] ~ ImportDeclaration[source.value=/^../]",
          message: "External imports must come before parent imports",
        },
        {
          selector:
            "ImportDeclaration[source.value=/^../] ~ ImportDeclaration[source.value=./]",
          message: "Parent imports must come before sibling imports",
        },
        {
          selector:
            "ImportDeclaration[source.value=./] ~ ImportDeclaration[source.value=/^./]",
          message: "Sibling imports must come before index imports",
        },
      ],
    },
  },
];
