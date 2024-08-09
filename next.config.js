/** @type {import('next').NextConfig} */
export default {
	// React
	reactStrictMode: true,

	// Next
	images: {
		formats: ["image/avif", "image/webp"],
	},
	poweredByHeader: false,

	// Turbopack
	experimental: {
		turbo: {
			rules: {
				"*.svg": {
					loaders: ["@svgr/webpack"],
					as: "*.js",
				},
			},
		},
	},

	// Webpack
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"))
		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {
					not: [...fileLoaderRule.resourceQuery.not, /url/],
				},
				use: ["@svgr/webpack"],
			},
		)
		fileLoaderRule.exclude = /\.svg$/i
		return config
	},
}
