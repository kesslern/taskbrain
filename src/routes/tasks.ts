import db from '../db';

export async function post(request) {
	// TODO: Validate input

	const body = {
		description: null,
		...request.body,
	};

	try {
		const id = (await db.query('INSERT INTO tasks(name, description, repeat_interval) VALUES(${name}, ${description}, ${repeatInterval}) RETURNING id', body))[0];

		return {
			status: 200,
			body: id
		};
	} catch(e) {
		console.log(e)
		return {
			status: 500,
			body: {
				error: 'Internal Server Error'
			}
		};
	}
}
