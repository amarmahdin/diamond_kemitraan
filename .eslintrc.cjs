/* eslint-env node */
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Nama page mengikuti route bisnis (Dashboard, Draft, PKS, dll.)
    'vue/multi-word-component-names': 'off',
  },
}
