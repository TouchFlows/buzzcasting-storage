/**
 * Get a random item from an array
 * @param array
 * @returns
 */
export function getRandomValue(array: string | any[]): number {
	return array[Math.floor(Math.random() * array.length)]
}