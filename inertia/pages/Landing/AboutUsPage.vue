<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3'
import MdiInstagram from '~/assets/icons/MdiInstagram.vue'
import UilFacebook from '~/assets/icons/UilFacebook.vue'
</script>

<template>
  <Head title="¿Quiénes Somos?" />

  <div class="bg-gray-100 min-h-screen">
    <header class="bg-white shadow-md">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <button @click="$inertia.visit('/')" class="text-2xl font-bold text-indigo-600">
          MedRemind
        </button>
        <button
          @click="router.get('/registro')"
          class="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md shadow-sm hover:bg-indigo-200 cursor-pointer"
        >
          Registrarse
        </button>
      </div>
    </header>

    <main class="container mx-auto px-6 mt-8">
      <section class="bg-white rounded-lg shadow-md p-6">
        <h1 class="text-3xl font-bold text-indigo-600 text-center">¿Quiénes Somos?</h1>
        <p class="mt-6 text-gray-600 text-lg leading-relaxed">
          En <span class="text-indigo-600 font-semibold">MedRemind</span>, somos un equipo dedicado
          a mejorar la calidad de vida de las personas a través de la tecnología. Creemos firmemente
          en el poder de los recordatorios simples pero efectivos para ayudar a las personas a
          mantener sus tratamientos médicos al día, brindando tranquilidad tanto a los pacientes
          como a sus familias.
        </p>
        <p class="mt-4 text-gray-600 text-lg leading-relaxed">
          Nuestro objetivo es proporcionar una herramienta accesible, segura y fácil de usar para la
          gestión de medicamentos, creando un impacto positivo en la salud de nuestros usuarios.
        </p>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div class="bg-indigo-50 rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-indigo-600">Nuestros Valores</h3>
          <ul class="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>
              <span class="font-semibold text-indigo-600">Innovación:</span> Aprovechamos la
              tecnología para mejorar vidas.
            </li>
            <li>
              <span class="font-semibold text-indigo-600">Accesibilidad:</span> Diseñamos
              herramientas simples y efectivas para todos.
            </li>
            <li>
              <span class="font-semibold text-indigo-600">Empatía:</span> Entendemos las necesidades
              de los pacientes y sus familias.
            </li>
          </ul>
        </div>
        <div class="bg-indigo-50 rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-indigo-600">Nuestro Propósito</h3>
          <p class="mt-4 text-gray-600">
            Facilitar el seguimiento de tratamientos médicos mediante recordatorios inteligentes y
            un sistema seguro que conecta a los pacientes con sus seres queridos para fomentar una
            atención integral.
          </p>
        </div>
      </section>

      <section class="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
        <h3 class="text-xl font-bold text-indigo-600">Contáctanos</h3>
        <p class="mt-4 text-gray-600">
          ¿Tienes preguntas o sugerencias? ¡Nos encantaría saber de ti! Escríbenos a nuestro correo
          electrónico o visita nuestras redes sociales.
        </p>
        <div class="flex justify-center items-center space-x-4 mt-6">
          <a
            href="mailto:contacto@medremind.com"
            class="text-indigo-600 hover:text-indigo-700 underline"
          >
            contacto@medremind.com
          </a>
          <a href="#" class="text-indigo-600 hover:text-indigo-700 underline flex items-center">
            <UilFacebook class="size-7 mr-2" />
            Facebook
          </a>
          <a href="#" class="text-indigo-600 hover:text-indigo-700 underline flex items-center">
            <MdiInstagram class="size-7 mr-2" />
            Twitter
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
