import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { WeekDay } from '../enums/week_day.js'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Reminder extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare notes: string | null

  @column()
  declare days: WeekDay[]

  @column()
  declare time: DateTime

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
