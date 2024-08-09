"use client"

import { useQuery } from "@tanstack/react-query"

import { getUsers } from "../api/get-users"

export const useUsers = () => {
	const { isPending, data, isError } = useQuery({
		queryKey: ["users"],
		queryFn: () => getUsers(),
		select: (data) => data.data,
	})

	return { isPending, data, isError }
}
