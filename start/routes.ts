import router from '@adonisjs/core/services/router'
const RegisterController = () => import('#controllers/register_controller')
const MedicalRecordController = () => import('#controllers/medical_record_controller')

router.on('/').renderInertia('Landing/HomePage')
router.on('/sobre-nosotros').renderInertia('Landing/AboutUsPage')

router
  .group(() => {
    router.get('/registro', [RegisterController, 'show']).as('register.show')
    router.post('/register', [RegisterController, 'store']).as('register.store')
  })
  .as('auth')

router
  .group(() => {
    router.get('/expediente', [MedicalRecordController, 'create']).as('create')
    router.post('/medical-records', [MedicalRecordController, 'store']).as('store')
  })
  .as('medical_records')
