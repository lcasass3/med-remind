import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reminders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unsigned().notNullable()
      table.string('title').notNullable()
      table.text('notes').nullable()
      table.json('days').notNullable()
      table.time('time').notNullable()
      table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
