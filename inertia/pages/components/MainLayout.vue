<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md h-screen fixed">
      <div class="flex flex-col items-center py-6">
        <!-- Logo -->
        <h1 class="text-2xl font-bold text-indigo-700">
          Med<span class="text-gray-500">Remind</span>
        </h1>
        <p class="text-sm text-gray-500 mt-1">Medicina</p>
      </div>

      <!-- Navigation Links -->
      <nav class="mt-6 space-y-4">
        <a
          href="#"
          class="block py-2 px-4 mx-4 rounded-lg bg-indigo-600 text-white text-center font-medium hover:bg-indigo-700"
        >
          Mi expediente
        </a>
        <a
          href="#"
          class="block py-2 px-4 mx-4 rounded-lg bg-indigo-600 text-white text-center font-medium hover:bg-indigo-700"
        >
          Mis recordatorios
        </a>
        <a
          href="#"
          class="block py-2 px-4 mx-4 rounded-lg bg-indigo-600 text-white text-center font-medium hover:bg-indigo-700"
        >
          Mis citas al médico
        </a>
      </nav>

      <!-- Logout -->
      <div class="mt-auto px-4 py-6">
        <button
          @click="$inertia.visit('/')"
          class="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
        >
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 ml-64 overflow-y-auto">
      <!-- Header -->
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Mis recordatorios</h1>
        <button
          class="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 20.243A4 4 0 018.686 21h6.628a4 4 0 003.565-1.757M15 11h4m0 0h4m-4 0V7m0 4v4M9 7h6m-6 4h6m-6 4h6"
            />
          </svg>
        </button>
      </header>

      <!-- Page Content Placeholder -->
      <slot></slot>
    </main>
  </div>
</template>
