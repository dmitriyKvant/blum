import { prisma } from "@/shared/lib"

import type { IUser } from "../model"

export const createUser = async (user: IUser) => {
	const response = await prisma.user.create({
		data: user,
	})

	return response
}
