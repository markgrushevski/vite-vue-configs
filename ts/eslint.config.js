import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTs from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-config-prettier';

/** @type { import('pluginJs').Linter.FlatConfig[] } */
export default ([
    {
        files: [ 'src/**/*.{ts,vue}' ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaVersion: 'latest' }
        },
        ignores: [ '.idea', '.vscode', 'dist', 'node_modules' ]
    },
    pluginJs.configs.recommended,
    ...pluginTs.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        files: [ 'src/**/*.vue' ],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    },
    pluginPrettier
]);
