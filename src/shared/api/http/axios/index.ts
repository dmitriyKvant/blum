import axios from "axios"

export const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
})

http.interceptors.request.use(
	(config) => {
		if (config.url?.includes("blum.codes")) {
			config.headers.Accept = "application/json, text/plain, */*"
			config.headers["User-Agent"] =
				"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 Edg/126.0.0.0"
		}
		return config
	},
	(error) => {
		console.error(error)
		return Promise.reject(error)
	},
)

http.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		console.error(error)
		return Promise.reject(error)
	},
)
