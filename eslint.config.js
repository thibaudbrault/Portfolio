import eslint from "@eslint/js";
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import tailwind from "eslint-plugin-tailwindcss";

export default [
  eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    ignores: [
        'node_modules/**',
        '.astro/**',
        'package/**',
        '.env',
        '.env.*',
        'pnpm-lock.yaml',
    ],
    rules: {
        "no-empty": "warn",
        "tailwindcss/no-custom-classname": "off",
        "tailwindcss/classnames-order": [
            "warn",
            {
                "officialSorting": true
            }
        ],
    }
  }
];
