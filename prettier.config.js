/** @type {import("prettier").Config} */
export default {
	semi: false,
	useTabs: true,
	printWidth: 100,
	bracketSameLine: true,
	experimentalTernaries: true,
	singleAttributePerLine: true,
	overrides: [
		{
			files: ["*.(js|cjs|mjs|ts|tsx)"],
			options: {
				parser: "typescript",
			},
		},
		{
			files: "*.(yml|yaml)",
			options: {
				parser: "yaml",
			},
		},
		{
			files: "*.md",
			options: {
				parser: "markdown",
			},
		},
		{
			files: "*.json",
			options: {
				parser: "json-stringify",
			},
		},
	],
	tailwindFunctions: ["clsx"],
	tailwindConfig: "./tailwind.config.ts",
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
		"prettier-plugin-prisma"
	],
	importOrder: [
		"^@/app/(.*)$",
		"^@/widgets/(.*)$",
		"^@/features/(.*)$",
		"^@/entities/(.*)$",
		"^@/shared/(.*)$",
		"^[./]",
		"^public/(.*)$",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}
