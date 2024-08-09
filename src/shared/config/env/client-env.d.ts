import z from "zod"

const clientEnvSchema = z.object({
	NEXT_PUBLIC_API_URL: z.string().url(),
})

const parsedClientEnv = clientEnvSchema.safeParse(process.env)

if (!parsedClientEnv.success) {
	console.error(parsedClientEnv.error)
	throw new Error("Invalid client env")
}

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Readonly<z.infer<typeof clientEnvSchema>> {}
	}
}
