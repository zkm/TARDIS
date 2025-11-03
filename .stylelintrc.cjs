// Stylelint configuration for SCSS with Prettier integration
// Docs: https://stylelint.io/ and https://github.com/stylelint-scss/stylelint-config-standard-scss
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
  ],
  ignoreFiles: [
    'css/**',
    'dist/**',
    'node_modules/**',
  ],
  rules: {
    // Allow custom id/class patterns used in this project
    // You can tighten these later if desired
    'selector-id-pattern': null,
    'selector-class-pattern': null,
  },
};