<script setup>
import { Head, useForm } from '@inertiajs/vue3'
import { reactive } from 'vue'

// const form = reactive({
//   name: '',
//   email: '',
//   phone: '',
//   password: '',
// })

const form = useForm({
  name: null,
  email: null,
  phone: null,
  password: null,
  remember: false,
})
</script>

<template>
  <Head title="Registro" />

  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-indigo-600 text-center">Crear Cuenta</h2>
      <p class="text-gray-600 text-center mt-2">Llena los campos para registrarte</p>

      <form @submit.prevent="form.post('/register')" class="mt-6 space-y-4">
        <!-- Nombre completo -->
        <div>
          <label for="name" class="block text-gray-700 font-semibold">Nombre Completo</label>
          <input
            id="name"
            type="text"
            v-model="form.name"
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
