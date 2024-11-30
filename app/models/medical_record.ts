import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class MedicalRecord extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare age: number

  @column()
  declare bloodType: string

  @column()
  declare weightInCentimeters: number

  @column()
  declare heightInKilograms: number

  @column()
  declare illnesses: string

  @column()
  declare allergies: string

  @column()
  declare medications: string

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
