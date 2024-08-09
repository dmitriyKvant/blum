"use client"

import { NextUIProvider } from "@nextui-org/system"
import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "@/shared/api"

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>{children}</NextUIProvider>
		</QueryClientProvider>
	)
}
