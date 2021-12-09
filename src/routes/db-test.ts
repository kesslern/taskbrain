import db from '../db';

export async function get() {
	console.log('Running get');
	try {
		const time = await db.query('SELECT NOW() as now');

		return {
			body: {
				time: time[0].now
			}
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
