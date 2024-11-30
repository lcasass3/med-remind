import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@vinejs/vine'

export default class RegisterController {
  async show({ inertia }: HttpContext) {
    return inertia.render('Auth/RegisterPage')
  }

  async store({ request, response, session }: HttpContext) {
    try {
      const payload = await request.validateUsing(registerValidator)
      await User.create(payload)
      // return response.redirect().toRoute('auth.login.show')
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
