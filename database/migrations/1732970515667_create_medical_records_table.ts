import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'medical_records'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unsigned().notNullable()
      table.integer('age').notNullable()
      table.string('blood_type').notNullable()
      table.float('weight_in_centimeters').notNullable()
      table.float('height_in_kilograms').notNullable()
      table.text('illnesses').notNullable()
      table.text('allergies').notNullable()
      table.text('medications').notNullable()
      table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
