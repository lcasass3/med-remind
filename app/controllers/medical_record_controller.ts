import MedicalRecord from '#models/medical_record'
import { medicalRecordValidator } from '#validators/medical_record_validator'
import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@vinejs/vine'

export default class MedicalRecordController {
  async create({ inertia }: HttpContext) {
    return inertia.render('MedicalRecord/MedicalRecordPage')
  }

  async store({ request, response, session }: HttpContext) {
    try {
      const payload = await request.validateUsing(medicalRecordValidator)
      await MedicalRecord.create(payload)
      // return response.redirect().toRoute('medical_records.index')
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        session.flash('errors', {
          message: 'Revisa los campos del formulario',
        })
        return response.redirect().back()
      }
      console.error(error)
      session.flashAll()
      return response.redirect().back()
    }
  }
}
