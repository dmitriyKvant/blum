/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"prettier",
		"plugin:@typescript-eslint/recommended",
		"next",
		require.resolve("@vercel/style-guide/eslint/next"),
		"plugin:@tanstack/eslint-plugin-query/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		ecmaVersion: 14,
		sourceType: "module",
	},
	plugins: [ "@typescript-eslint", "@tanstack/query"],
	globals: {
		React: true,
		JSX: true,
	},
	env: {
		es6: true,
		node: true,
	},
	ignorePatterns: ["node_modules"],
	overrides: [
		{
			files: ["*.(js|cjs|mjs|ts|tsx)"],
		},
	],
}
