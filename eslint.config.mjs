import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigAirbnb from "eslint-config-airbnb";
import eslintConfigPrettier from "eslint-config-prettier";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  eslintConfigAirbnb,
  eslintConfigPrettier,
];