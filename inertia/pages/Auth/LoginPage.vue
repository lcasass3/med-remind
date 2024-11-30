<script setup>
import { Head, useForm } from '@inertiajs/vue3'
import Swal from 'sweetalert2'
import MainLayout from '../components/MainLayout.vue'

const form = useForm({
  email: '',
  password: '',
})

const handleSubmit = () => {
  form.post('/login', {
    onError: (errors) => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Error en el inicio de sesión',
        text: errors.message || 'Credenciales incorrectas',
        showConfirmButton: false,
        timer: 3000,
      })
    },
    onSuccess: () => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido!',
        showConfirmButton: false,
        timer: 3000,
      })
    },
  })
}
</script>

<template>
  <Head title="Iniciar Sesión" />

  <header class="bg-white shadow-xl h-1/2 z-20">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <button @click="$inertia.visit('/')" class="text-2xl font-bold text-indigo-600">
        MedRemind
      </button>
      <button
        @click="$inertia.visit('/registro')"
        class="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md shadow-sm hover:bg-indigo-200"
      >
        Registrarse
      </button>
    </div>
  </header>

  <div class="h-screen flex justify-center items-center bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <!-- Title -->
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-indigo-600">Iniciar Sesión</h2>
        <p class="text-gray-500 mt-2">Ingresa tus credenciales para acceder</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Email -->
        <div>
          <label for="email" class="block text-gray-700 font-semibold">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            v-model="form.email"
            placeholder="ejemplo@correo.com"
            class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-gray-700 font-semibold">Contraseña</label>
          <input
            id="password"
            type="password"
            v-model="form.password"
            placeholder="••••••••"
            class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          Iniciar Sesión
        </button>

        <!-- Additional Links -->
        <div class="text-center mt-4">
          <a href="/register" class="text-indigo-500 hover:underline"
            >¿No tienes una cuenta? Regístrate</a
          >
        </div>
      </form>
    </div>
  </div>
</template>
