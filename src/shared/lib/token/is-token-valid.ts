import { http } from "@/shared/api"
import { URL } from "@/shared/config"

export const isTokenValid = async (accessToken: string) => {
	try {
		await http.get(URL.BLUM_INFO, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		return true
	} catch (error) {
		return false
	}
}
