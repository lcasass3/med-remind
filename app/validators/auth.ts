import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string(),
    phone: vine.string().optional(),
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(8).trim(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(8),
  })
)
