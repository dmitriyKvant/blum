import { z } from "zod"

export const userSchema = z.object({
	id: z.string(),
	username: z.string(),
	balance: z.number(),
	tickets: z.number(),
	accessToken: z.string(),
	refreshToken: z.string(),
})

export interface IUser extends z.infer<typeof userSchema> {}
