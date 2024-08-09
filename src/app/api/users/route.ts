import { NextResponse } from "next/server"

import { prisma } from "@/shared/lib"

export const revalidate = 3600

export async function GET() {
	try {
		const users = await prisma.user.findMany()
		return NextResponse.json(users, { status: 200 })
	} catch (error) {
		return NextResponse.json({ error: "Error retrieving users" }, { status: 500 })
	}
}
