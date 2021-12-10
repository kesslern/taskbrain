import db from '../db';
import type { NewTaskData } from '../form';
import { validate } from '../form';
import type { EndpointOutput } from '@sveltejs/kit';
import type { DefaultBody } from '@sveltejs/kit/types/endpoint';

type ErrorBody = {
	error: string;
} | Record<string, string>;

type EndpointResponse<T extends DefaultBody> = Promise<EndpointOutput<T | ErrorBody>>;

export async function post(request: { body: NewTaskData }): EndpointResponse<number> {
	try {
		const validation = validate(request.body);
		if (Object.keys(validation).length > 0) {
			return {
				status: 400,
				body: validation
			};
		}

		const body = {
			description: null,
			...request.body
		};

		const id = (
			await db.query(
				'INSERT INTO tasks(name, description, repeat_interval) VALUES(${name}, ${description}, ${repeatInterval}) RETURNING id',
				body
			)
		)[0];

		return {
			status: 200,
			body: id
		};
	} catch (e) {
		console.log(e);
		return {
			status: 500,
			body: {
				error: 'Internal Server Error'
			}
		};
	}
}
