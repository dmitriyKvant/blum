import { NextRequest, NextResponse } from "next/server"

import { getUserByToken } from "@/entities/user"

import { prisma } from "@/shared/lib"

export async function POST(req: NextRequest) {
	try {
		const { accessToken } = await req.json()
		const { data } = await getUserByToken(accessToken)
		const createdUser = await prisma.user.create({
			data: data,
		})
		return NextResponse.json(createdUser, { status: 200 })
	} catch (error) {
		console.error(`Error processing request: ${error}`)
		return NextResponse.json(
			{ error: "An error occurred while creating the user." },
			{ status: 500 },
		)
	}
}
