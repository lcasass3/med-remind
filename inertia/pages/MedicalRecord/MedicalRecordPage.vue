<script setup>
import { Head, useForm } from '@inertiajs/vue3'
import Swal from 'sweetalert2'
import MainLayout from '../components/MainLayout.vue'

const form = useForm({
  age: null,
  bloodType: '',
  weightInCentimeters: null,
  heightInKilograms: null,
  illnesses: '',
  allergies: '',
  medications: '',
})

const handleSubmit = () => {
  form.post('/medical-records', {
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
        text: '¡Registro médico creado!',
        showConfirmButton: false,
        timer: 3000,
      })
    },
  })
}
</script>

<template>
  <Head title="Registro Médico" />

  <MainLayout>
    <div class="min-h-screen flex justify-center items-center bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <!-- Title -->
        <div class="text-center mb-6">
          <h2 class="text-3xl font-bold text-indigo-600">Crear Registro Médico</h2>
          <p class="text-gray-500 mt-2">Llena los campos para crear el registro médico</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Age -->
          <div>
            <label for="age" class="block text-gray-700 font-semibold">Edad</label>
            <input
              id="age"
              type="number"
              v-model="form.age"
              placeholder="Ingresa la edad"
              class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <!-- Blood Type -->
          <div>
            <label for="bloodType" class="block text-gray-700 font-semibold">Tipo de Sangre</label>
            <input
              id="bloodType"
              type="text"
              v-model="form.bloodType"
              placeholder="Ejemplo: O+"
              class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <!-- Weight -->
          <div>
            <label for="weightInCentimeters" class="block text-gray-700 font-semibold"
              >Peso (kg)</label
            >
            <input
              id="weightInCentimeters"
              type="number"
              v-model="form.weightInCentimeters"
              placeholder="Ejemplo: 70"
              class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <!-- Height -->
          <div>
            <label for="heightInKilograms" class="block text-gray-700 font-semibold"
              >Altura (cm)</label
            >
            <input
              id="heightInKilograms"
              type="number"
              v-model="form.heightInKilograms"
              placeholder="Ejemplo: 170"
              class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <!-- Illnesses -->
          <div>
            <label for="illnesses" class="block text-gray-700 font-semibold">Enfermedades</label>
            <textarea
              id="illnesses"
              v-model="form.illnesses"
              placeholder="Describe enfermedades conocidas"
              rows="3"
              class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <!-- Allergies -->
          <div>
            <label for="allergies" class="block text-gray-700 font-semibold">Alergias</label>
            <textarea
              id="allergies"
              v-model="form.allergies"
              placeholder="Especifica alergias conocidas"
              rows="3"
              class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <!-- Medications -->
          <div>
            <label for="medications" class="block text-gray-700 font-semibold">Medicamentos</label>
            <textarea
              id="medications"
              v-model="form.medications"
              placeholder="Menciona medicamentos actuales"
              rows="3"
              class="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Crear Registro
          </button>
        </form>
      </div>
    </div>
  </MainLayout>
</template>
