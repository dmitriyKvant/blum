import z from "zod"

const serverEnvSchema = z.object({
	POSTGRES_PRISMA_URL: z.string().url(),
	GAME_RECEIVED_POINT_RANGE: z.string(),
	GAME_SESSION_DURATION_RANGE: z.string(),
})

const parsedServerEnv = serverEnvSchema.safeParse(process.env)

if (!parsedServerEnv.success) {
	console.error(parsedServerEnv.error)
	throw new Error("Invalid server env")
}

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Readonly<z.infer<typeof serverEnvSchema>> {}
	}
}
