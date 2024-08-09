import { z } from "zod"

const urlSchema = z.record(z.string().url())

export const URL = {
	BLUM_INFO: "https://gateway.blum.codes/v1/user/me",
	BLUM_TOKENS: "https://gateway.blum.codes/v1/auth/refresh",
	BLUM_BALANCE: "https://game-domain.blum.codes/api/v1/user/balance",
	BLUM_AUTH_CHECK: "https://gateway.blum.codes/v1/user/me",
	BLUM_GAME_PLAY: "https://game-domain.blum.codes/api/v1/game/play",
	BLUM_GAME_CLAIM: "https://game-domain.blum.codes/api/v1/game/claim",
	BLUM_DAILY_REWARD: "https://game-domain.blum.codes/api/v1/daily-reward?offset=-240",
}

const parsedUrl = urlSchema.safeParse(URL)

if (!parsedUrl.success) {
	console.error(parsedUrl.error)
	throw new Error("Invalid url")
}
