import vine from '@vinejs/vine'

export const medicalRecordValidator = vine.compile(
  vine.object({
    age: vine.number().withoutDecimals().positive(),
    bloodType: vine.string(),
    weightInCentimeters: vine.number().positive(),
    heightInKilograms: vine.number().positive(),
    illnesses: vine.string(),
    allergies: vine.string(),
    medications: vine.string(),
  })
)
