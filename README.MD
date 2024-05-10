## My Setup for Vue 3 JS/TS projects 🧋

You just need to copy and paste files you want in your project

### _All In One_ 🧰

###### JS

```sh
git init && npm i vue pinia vue-router && npm i -D vite @vitejs/plugin-vue && npm i -D autoprefixer && npm i -D eslint eslint-plugin-vue eslint-config-prettier prettier stylelint stylelint-config-standard-vue postcss-html && npm i -D husky lint-staged && npm run prepare
```

###### TS

```sh
git init && npm i vue pinia vue-router && npm i -D vite @vitejs/plugin-vue && npm i -D autoprefixer && npm i -D eslint eslint-plugin-vue eslint-config-prettier prettier stylelint stylelint-config-standard-vue postcss-html && npm i -D husky lint-staged && npm run prepare && npm i -D vue-tsc typescript typescript-eslint
```

### _By Steps_ 🛠️

#### I. Git

```sh
git init
```

#### II. Dependencies

###### Vue

```sh
npm i vue pinia vue-router
```

###### Bundler

```sh
npm i -D vite @vitejs/plugin-vue
```

###### Code transformers

```sh
npm i -D autoprefixer
```

###### Lint and format code

```sh
npm i -D eslint @eslint/js globals eslint-plugin-vue eslint-config-prettier prettier stylelint stylelint-config-standard-vue postcss-html
```

###### Git hooks

```sh
npm i -D husky lint-staged && npm run prepare
```

#### III. Typescript

```sh
npm i -D vue-tsc typescript typescript-eslint
```
