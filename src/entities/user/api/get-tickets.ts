import { http } from "@/shared/api"
import { URL } from "@/shared/config"

import type { IUser } from "../model"

export const getTickets = async (user: IUser) => {
	const { data } = await http.get(URL.BLUM_BALANCE, {
		headers: {
			Authorization: `Bearer ${user.accessToken}`,
		},
	})
	return data.playPasses
}
