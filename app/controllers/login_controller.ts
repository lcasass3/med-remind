import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@vinejs/vine'

export default class LoginController {
  async show({ inertia }: HttpContext) {
    return inertia.render('Auth/LoginPage')
  }

  async store({ request, auth, response, session }: HttpContext) {
    try {
      const { email, password } = await request.validateUsing(loginValidator)
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)

      return response.redirect().toRoute('medical_records.create')
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        session.flash('errors', {
          message: 'Revisa tus credenciales',
        })
        return response.redirect().back()
      }
      console.error(error)
      session.flashAll()
      return response.redirect().back()
    }
  }
}
