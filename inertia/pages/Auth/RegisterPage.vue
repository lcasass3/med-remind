<script setup>
import { Head, useForm } from '@inertiajs/vue3'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

defineProps({ errors: Object })

const form = useForm({
  fullName: null,
  email: null,
  phone: null,
  password: null,
})
</script>

<template>
  <Head title="Registro" />

  <header class="bg-white shadow-xl z-20 h-1/2">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <button @click="$inertia.visit('/')" class="text-2xl font-bold text-indigo-600">
        MedRemind
      </button>
      <button
        @click="$inertia.visit('/iniciar-sesion')"
        class="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md shadow-sm hover:bg-indigo-200"
      >
        Iniciar sesion
      </button>
    </div>
  </header>

  <div class="bg-gray-100 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-md p-8 w-full max-w-md my-8">
      <h2 class="text-2xl font-bold text-indigo-600 text-center">Crear Cuenta</h2>
      <p class="text-gray-600 text-center mt-2">Llena los campos para registrarte</p>

      <form
        @submit.prevent="
          form.post('/register', {
            onError: (errors) => {
              Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Error en el formulario',
                text: errors.message,
                showConfirmButton: false,
                timer: 3000,
              })
            },
            onSuccess: () => {
              Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Registro exitoso',
                text: '¡Bienvenido a la plataforma!',
                showConfirmButton: false,
                timer: 3000,
              })
            },
          })
        "
        class="mt-6 space-y-4"
      >
        <!-- Nombre completo -->
        <div>
          <label for="fullName" class="block text-gray-700 font-semibold">Nombre Completo</label>
          <input
            id="fullName"
            type="text"
            v-model="form.fullName"
            placeholder="Escribe tu nombre completo"
            class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Correo Electrónico -->
        <div>
          <label for="email" class="block text-gray-700 font-semibold">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            v-model="form.email"
            placeholder="Ejemplo: usuario@email.com"
            class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Teléfono -->
        <div>
          <label for="phone" class="block text-gray-700 font-semibold">Teléfono (Opcional)</label>
          <input
            id="phone"
            type="tel"
            v-model="form.phone"
            placeholder="Ejemplo:  81 2345 6789"
            class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Contraseña -->
        <div>
          <label for="password" class="block text-gray-700 font-semibold">Contraseña</label>
          <input
            id="password"
            type="password"
            v-model="form.password"
            placeholder="Escribe una contraseña segura"
            class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Botón de Registro -->
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>
