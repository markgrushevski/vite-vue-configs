import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-config-prettier';

/** @type { import('pluginJs').Linter.FlatConfig[] } */
export default ([
    {
        files: [ 'src/**/*.{js,vue}' ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaVersion: 'latest' }
        },
        ignores: [ '.idea', '.vscode', 'dist', 'node_modules' ]
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    pluginPrettier
]);
