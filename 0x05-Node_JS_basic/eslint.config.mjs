import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser, // Browser-specific globals
        ...globals.node,    // Node.js-specific globals
      },
    },
    rules: {
      indent: ["error", 2],           // 2-space indentation
      quotes: ["error", "single"],    // Single quotes for strings
      "consistent-return": "error",   // Ensure functions return consistently
      "no-unused-vars": "error",      // Flag unused variables
      "no-console": "off",            // Allow console.log (adjust based on your needs)
    },
  },
  pluginJs.configs.recommended, // Using the recommended ESLint rules
];

