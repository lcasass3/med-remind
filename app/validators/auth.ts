import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string(),
    phone: vine.string().optional(),
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(8).trim(),
  })
)
