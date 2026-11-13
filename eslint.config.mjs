import tseslint from "typescript-eslint";
import obsidianmd from "eslint-plugin-obsidianmd";
import globals from "globals";

export default tseslint.config(
	{
		files: ["src/**/*.ts"],
		languageOptions: {
			globals: globals.browser,
			parser: tseslint.parser,
			parserOptions: { project: "./tsconfig.json" },
		},
	},
	...obsidianmd.configs.recommended,
);
