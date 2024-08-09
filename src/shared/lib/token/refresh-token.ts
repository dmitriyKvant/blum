import type { TBlumUserTokens } from "@/entities/blum-user"
import type { IUser } from "@/entities/user"

import { http } from "@/shared/api"
import { URL } from "@/shared/config"

import { prisma } from "../prisma"

export const refreshToken = async (user: IUser) => {
	const { data } = await http.post<TBlumUserTokens>(URL.BLUM_TOKENS, {
		refresh: user.refreshToken,
	})

	await prisma.user.update({
		where: { id: user.id },
		data: { accessToken: data.access, refreshToken: data.refresh },
	})
	return data.access
}
