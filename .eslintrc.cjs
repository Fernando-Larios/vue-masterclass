/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
    /*'plugin:vue/vue3-strongly-recommended'*/
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  //this rules are to silence/show errors

  rules: {
    //'no-unused-vars': 2
    'vue/multi-word-component-names': 0
  }
}
