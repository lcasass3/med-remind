import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ inertia }: HttpContext) {
    return inertia.render('Auth/RegisterPage')
  }
}
