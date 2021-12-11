import db from '../db';
import type { NewTaskData } from '../form';
import { validate } from '../form';
import type { EndpointOutput } from '@sveltejs/kit';

export async function post(request: { body: NewTaskData }): Promise<EndpointOutput<number>> {
  const validation = validate(request.body);
  if (Object.keys(validation).length > 0) {
    throw {
      status: 400,
      body: validation,
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
}
