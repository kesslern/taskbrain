export function hasKeys(obj: Record<never, never>): boolean {
	return Object.keys(obj).length > 0;
}
