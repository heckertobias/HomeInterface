/** @type {import("prettier").Config} */
export default {
  trailingComma: "none",
  tabWidth: 4,
  semi: false,
  singleQuote: false,
  printWidth: 100,
  importOrder: ["^react", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSortSpecifiers: true,
  plugins: [
    "prettier-plugin-tailwindcss, @trivago/prettier-plugin-sort-imports",
  ],
};
