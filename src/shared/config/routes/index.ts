export const ROUTE = {
	HOME: "/",
	API_USERS: "/users",
	API_COMPLETE_TASK: "/users/complete-task",
	API_CREATE_USER: "/users/create",
} as const satisfies Record<string, string>
