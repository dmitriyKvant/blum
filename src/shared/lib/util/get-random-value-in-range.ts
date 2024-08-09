export const getRandomValueInRange = (range: number[]) => {
	if (range.length !== 2) {
		throw new Error("")
	}

	const [min, max] = range

	if (typeof min !== "number" || typeof max !== "number") {
		throw new Error("")
	}
	if (min >= max) {
		throw new Error("")
	}

	return Math.floor(Math.random() * (max - min + 1) + min)
}
