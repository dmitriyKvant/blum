import { Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
	weight: ["400", "500", "600", "700", "900"],
	style: ["normal"],
	variable: "--font-sans",
	display: "swap",
	subsets: ["latin"],
})
