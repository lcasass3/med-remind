import router from '@adonisjs/core/services/router'
const RegisterController = () => import('#controllers/register_controller')

router.on('/').renderInertia('Landing/HomePage')
router.on('/sobre-nosotros').renderInertia('Landing/AboutUsPage')

router
  .group(() => {
    router.get('/registro', [RegisterController, 'show']).as('register')
  })
  .as('auth')
