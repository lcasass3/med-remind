<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Conocenos" />

  <div class="bg-gray-100 min-h-screen">
    <header class="bg-white shadow-md h-1/2">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <button @click="$inertia.visit('/')" class="text-2xl font-bold text-indigo-600">
          MedRemind
        </button>
        <button
          @click="$inertia.visit('/sobre-nosotros')"
          class="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md shadow-sm hover:bg-indigo-200"
        >
          ¿Quiénes Somos?
        </button>
      </div>
    </header>

    <main class="container mx-auto px-6 mt-8">
      <section class="bg-indigo-50 rounded-lg shadow-md overflow-hidden">
        <div class="flex flex-col md:flex-row items-center">
          <img
            src="../../assets/doctor-image.png"
            alt="Doctor and Patient"
            class="w-full md:w-1/2 h-auto object-cover"
          />
          <div class="p-6 md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-bold text-indigo-600">Innovación y Tecnología</h2>
            <p class="mt-4 text-gray-600">¡Cuida de ti mismo con un solo clic!</p>
            <button
              @click="router.get('/registro')"
              class="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700"
            >
              Registrate
            </button>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-indigo-600">Misión</h3>
          <p class="mt-4 text-gray-600">
            Facilitar el seguimiento y la toma de medicamentos, mejorando la calidad de vida de las
            personas a través de recordatorios simples y un registro seguro y accesible.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-indigo-600">Visión</h3>
          <p class="mt-4 text-gray-600">
            Facilitar el seguimiento y la toma de medicamentos, mejorando la calidad de vida de las
            personas a través de recordatorios simples y un registro seguro y accesible.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
