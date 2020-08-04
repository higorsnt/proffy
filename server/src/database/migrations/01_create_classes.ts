import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('classes', table => {
		table.increments('id').primary();
		table.string('subject').notNullable();
		table.decimal('cost').notNullable();

		table
			.integer('user_id')
			.notNullable()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('classes');
}
