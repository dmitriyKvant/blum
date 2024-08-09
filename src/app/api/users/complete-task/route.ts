import { type NextRequest, NextResponse } from "next/server"

import { http } from "@/shared/api"
import { isTokenValid, prisma, refreshToken } from "@/shared/lib"

export async function POST(req: NextRequest) {
	try {
		const { url } = await req.json()
		const users = await prisma.user.findMany()
		for (const user of users) {
			let accessToken = user.accessToken
			if (!(await isTokenValid(accessToken))) {
				accessToken = await refreshToken(user)
			}
			try {
				await http.post(url, null, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				})
			} catch (error) {
				NextResponse.json("The task has already been completed.")
			}
		}
		return NextResponse.json({ status: 200 })
	} catch (error) {
		console.error(`Error processing request: ${error}`)
		return NextResponse.json(
			{ error: "An error occurred while processing the request." },
			{ status: 500 },
		)
	}
}
