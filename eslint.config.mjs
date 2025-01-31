import prettier from 'eslint-plugin-prettier';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import tailwindcss from 'eslint-plugin-tailwindcss';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import reactCompiler from 'eslint-plugin-react-compiler';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import nx from '@nx/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...nx.configs['flat/base'],
    ...nx.configs['flat/typescript'],
    ...nx.configs['flat/javascript'],
    {
        ignores: ['dist/*', '**/.cache', '**/public', '**/node_modules', '**/*.esm.js'],
    },
    ...compat.extends(
        'prettier',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
    ),
    {
        plugins: {
            prettier,
            unicorn,
            'unused-imports': unusedImports,
            tailwindcss,
            'simple-import-sort': simpleImportSort,
            'react-compiler': reactCompiler,
        },

        languageOptions: {
            parser: tsParser,
        },

        settings: {
            tailwindcss: {
                callees: ['cn'],
                config: 'tailwind.config.js',
            },
        },

        rules: {
            'prettier/prettier': ['warn', {
                useTabs: true,
                tabWidth: 4,
                endOfLine: 'auto',
            }],

            'unicorn/filename-case': ['error', {
                case: 'kebabCase',
                ignore: ['/android', '/ios'],
            }],

            'max-params': ['error', 3],
            'max-lines-per-function': ['error', 200],
            'react/display-name': 'off',
            'react/no-inline-styles': 'off',
            'react/destructuring-assignment': 'off',
            'react/require-default-props': 'off',
            '@typescript-eslint/comma-dangle': 'off',

            '@typescript-eslint/consistent-type-imports': ['warn', {
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports',
                disallowTypeAnnotations: true,
            }],

            'import/prefer-default-export': 'off',

            // 'import/no-cycle': ['error', {
            //     maxDepth: '∞',
            // }],

            'tailwindcss/classnames-order': ['warn', {
                officialSorting: true,
            }],

            'simple-import-sort/imports': ['error', {
                groups: [['^.+\\.s?css$'], [
                    '^(assert|buffer|crypto|fs|http|https|os|path|querystring|stream|url|util|zlib)(/|$)',
                    '^react',
                    '^@?\\w',
                ], ['^components(/.*|$)'], ['^lib(/.*|$)', '^hooks(/.*|$)', '^ui(/.*|$)', '^core(/.*|$)'], ['^\\.']],
            }],

            'simple-import-sort/exports': 'error',
            '@typescript-eslint/no-unused-vars': 'off',
            'tailwindcss/no-custom-classname': 'off',
            'unused-imports/no-unused-imports': 'error',

            'unused-imports/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            }],

            'no-tabs': 'off',

            indent: ['error', 'tab', {
                SwitchCase: 1,
            }],

            'sort-imports': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-require-imports': 'off',

            '@nx/enforce-module-boundaries': [
                'error',
                {
                    enforceBuildableLibDependency: true,
                    allow: ['^.*/eslint(\.base)?\.config\.[cm]?js$'],
                    depConstraints: [
                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                    ],
                },
            ],
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
        rules: {},
    },
];
