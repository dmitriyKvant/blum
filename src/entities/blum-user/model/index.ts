import { z } from "zod"

export const blumUserInfoSchema = z.object({
	id: z.object({
		id: z.string(),
	}),
	username: z.string(),
})

export const blumUserBalanceSchema = z.object({
	availableBalance: z.string(),
	farming: z.object({
		balance: z.string(),
		earningsRate: z.string(),
		endTime: z.number(),
		startTime: z.number(),
	}),
	playPasses: z.number(),
	timestamp: z.number(),
})

export const blumUserTokensSchema = z.object({
	access: z.string(),
	refresh: z.string(),
	user: z.null(),
})

export const blumUserSchema = blumUserInfoSchema
	.merge(blumUserBalanceSchema)
	.merge(blumUserTokensSchema)

export type TBlumUserInfo = z.infer<typeof blumUserInfoSchema>
export type TBlumUserBalance = z.infer<typeof blumUserBalanceSchema>
export type TBlumUserTokens = z.infer<typeof blumUserTokensSchema>
