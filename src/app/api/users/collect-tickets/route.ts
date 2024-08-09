import { NextResponse } from "next/server"

import { playGame } from "@/features/play-game/api"

import { http } from "@/shared/api"
import { URL } from "@/shared/config"
import { delay, getRandomValueInRange, isTokenValid, prisma, refreshToken } from "@/shared/lib"

const preGameDelayRange = [10, 20]

export async function GET() {
	try {
		const users = await prisma.user.findMany()
		for (const user of users) {
			let accessToken = user.accessToken
			if (!(await isTokenValid(accessToken))) {
				accessToken = await refreshToken(user)
			}

			await http.get(URL.BLUM_DAILY_REWARD, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})

			await delay(getRandomValueInRange(preGameDelayRange))

			await playGame(user)
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
