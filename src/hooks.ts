import type { ServerResponse } from '@sveltejs/kit/types/hooks';

export async function handle({ request, resolve }): Promise<ServerResponse> {
  try {
    return await resolve(request);
  } catch (error) {
		console.log("Error: ", error);
    const body = JSON.stringify({
      error: error.body ?? 'Internal server error'
    });

    return {
      headers: {
        'Content-Type': 'application/json'
      },
      status: error.status ?? 500,
      body
    };
  }
}