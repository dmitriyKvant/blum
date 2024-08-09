import { CompleteTaskForm } from "@/features/complete-task"

import { AddUserForm, UsersTable } from "@/entities/user"

export default function HomePage() {
	return (
		<>
			<div className="flex">
				<AddUserForm />
				<CompleteTaskForm />
			</div>
			<UsersTable />
		</>
	)
}
