import { z } from "zod"

import { getBlumUser } from "@/entities/blum-user"

import { http } from "@/shared/api"
import { ROUTE } from "@/shared/config"

import { type IUser, userSchema } from "../model"

type TUserAccessToken = IUser["accessToken"]

const usersSchema = z.array(userSchema)

export const getUsers = async () => {
	const { data } = await http.get<IUser[]>(ROUTE.API_USERS)

	const parsedUsers = usersSchema.safeParse(data)

	if (!parsedUsers.success) {
		console.error(parsedUsers.error)
		throw new Error("Invalid API response format for users")
	}

	return { data: parsedUsers.data }
}

export const getUserByToken = async (accessToken: TUserAccessToken) => {
	const { data } = await getBlumUser(accessToken)

	const user = {
		id: data.id.id,
		username: data.username,
		balance: Number(data.availableBalance),
		tickets: data.playPasses,
		accessToken: data.access,
		refreshToken: data.refresh,
	}

	const parsedUser = userSchema.safeParse(user)

	if (!parsedUser.success) {
		console.error(parsedUser.error)
		throw new Error("Invalid API response format for user")
	}

	return { data: parsedUser.data }
}
