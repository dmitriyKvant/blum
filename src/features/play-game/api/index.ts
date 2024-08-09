import type { IUser } from "@/entities/user"
import { getTickets } from "@/entities/user/api/get-tickets"

import { http } from "@/shared/api"
import { URL } from "@/shared/config"
import { delay, getRandomValueInRange } from "@/shared/lib"

import type { IGameClaim, IGamePlay } from "../model"

const gameSessionDurationRange = [30, 40]
const gameReceivedPointsRange = JSON.parse(process.env.GAME_RECEIVED_POINT_RANGE)

export const playGame = async (user: IUser) => {
	const tickets = await getTickets(user)

	for (let i = 0; tickets > i; i++) {
		const { data } = await http.post<IGamePlay>(URL.BLUM_BALANCE, null, {
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		})
		await delay(getRandomValueInRange(gameSessionDurationRange))

		const pointsToClaim = getRandomValueInRange(gameReceivedPointsRange)

		await http.post<IGameClaim>(
			URL.BLUM_GAME_CLAIM,
			{
				gameId: data.gameId,
				points: pointsToClaim,
			},
			{
				headers: {
					Authorization: `Bearer ${user.accessToken}`,
				},
			},
		)
	}
}
