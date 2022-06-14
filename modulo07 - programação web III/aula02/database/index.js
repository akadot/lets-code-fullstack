const knex = require("knex");

module.exports = knex({
	client: "pg",
	connection: {
		host: '127.0.0.1:5433',
		user: 'postgres',
		password: '1234',
		database: 'repair-shop'
	}
});