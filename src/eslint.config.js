import * as tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
    ...tseslint.configs.recommended,
    {
        ...eslintPluginPrettier,
        name: 'prettier-config',
    },
    {
        files: ["**/*.{ts,tsx}"],
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            "prettier/prettier": "error",
        },
    },
]
