import { http } from "@/shared/api"
import { URL } from "@/shared/config"

import {
	type TBlumUserBalance,
	type TBlumUserInfo,
	type TBlumUserTokens,
	blumUserSchema,
} from "../model"

type TBlumUserAccessToken = TBlumUserTokens["access"]

export const getBlumUser = async (accessToken: TBlumUserAccessToken) => {
	const [blumUserInfo, blumUserBalance, blumUserTokens] = await Promise.all([
		http.get<TBlumUserInfo>(URL.BLUM_INFO, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}),
		http.get<TBlumUserBalance>(URL.BLUM_BALANCE, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}),
		http.post<TBlumUserTokens>(URL.BLUM_TOKENS, {
			refresh: accessToken,
		}),
	])

	const blumUser = {
		...blumUserInfo.data,
		...blumUserBalance.data,
		...blumUserTokens.data,
	}
	const parsedBlumUser = blumUserSchema.safeParse(blumUser)

	if (!parsedBlumUser.success) {
		console.error(parsedBlumUser.error)
		throw new Error("Invalid API response format")
	}
	return { data: parsedBlumUser.data }
}
