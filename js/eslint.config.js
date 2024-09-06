import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default /** @type { import('eslint').Linter.FlatConfig[] } */ ([
    {
        files: [ 'src/**/*.{js,vue}' ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }
        },
        ignores: [
            '.idea/',
            '.vscode/',
            'dist/',
            'node_modules/'
        ]
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier
]);
