import pgp from 'pg-promise';

const db = pgp()({
	host: 'localhost',
	user: 'taskbrain-dev',
	password: 'dev123',
	port: 5420
});

export default db;
