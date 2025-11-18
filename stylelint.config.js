/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "declaration-no-important": true,
    "selector-class-pattern": null,
  },
};
