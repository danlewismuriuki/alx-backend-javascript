import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,  // Browser-specific globals
        ...globals.node,     // Node.js-specific globals
      },
    },
  },
  pluginJs.configs.recommended, // Using the recommended ESLint rules
];

