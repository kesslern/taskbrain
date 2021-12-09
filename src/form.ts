export type NewTaskForm = Record<keyof NewTaskData, Field>;

export interface NewTaskData {
	name: string;
	description: string;
	repeatInterval: string;
}

export interface Field {
	value: string;
	error?: string;
	required?: boolean;
}

export function validate(data: NewTaskData): Record<Partial<keyof NewTaskData>, string> {
	const errors: Record<string, string> = {};

	if (!data?.name) {
		errors.name = 'Name is required';
	}
	if (!data.repeatInterval) {
		errors.repeatInterval = 'Repeat interval is required';
	} else if (!data.repeatInterval.match(/^\d+$/)) {
		errors.repeatInterval = 'Repeat interval must be a number';
	}

	return errors;
}
