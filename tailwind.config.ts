import { nextui } from "@nextui-org/theme"
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
	darkMode: "class",
	content: [
		"./src/**/*.(ts|tsx)",
		"./node_modules/@nextui-org/theme/dist/components/(button|input|table|modal).js",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			fontSize: {
				base: ["1rem", "1.5rem"],
			},
			colors: {
				white: {
					DEFAULT: "var(--white)",
				},
				gray: {
					DEFAULT: "var(--gray)",
					600: "var(--gray-600)",
					800: "var(--gray-800)",
					950: "var(--gray-950)",
				},
			},
		},
	},
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						background: "#1E2227",
						foreground: "#EDF2F7",
					},
				},
			},
		}),
	],
} satisfies Config
