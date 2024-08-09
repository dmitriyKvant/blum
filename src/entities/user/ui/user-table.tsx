"use client"

import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	getKeyValue,
} from "@nextui-org/table"
import type React from "react"

import { useUsers } from "@/entities/user"

const columns = [
	{
		key: "username",
		label: "USERNAME",
	},
	{
		key: "balance",
		label: "BALANCE",
	},
	{
		key: "tickets",
		label: "TICKETS",
	},
]

export const UsersTable = () => {
	const { isPending, data } = useUsers()
	if (isPending) {
		return <div>loading...</div>
	}
	return (
		<div className="flex h-screen flex-col">
			<Table
				className="flex-1"
				aria-label="Users table">
				<TableHeader columns={columns}>
					{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
				</TableHeader>
				<TableBody items={data}>
					{(user) => (
						<TableRow key={user.id}>
							{(columnKey) => <TableCell>{getKeyValue(user, columnKey)}</TableCell>}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}
