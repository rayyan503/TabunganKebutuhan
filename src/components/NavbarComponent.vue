<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Mendapatkan rute aktif
const route = useRoute()
</script>

<template>
  <div class="relative z-10">
    <header class="bg-blue-500 p-4 autoAnim fixed top-0 left-0 right-0 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo Section -->
        <div class="text-white text-lg font-semibold">
          <RouterLink to="/">Menabung Kebutuhan</RouterLink>
        </div>

        <!-- Hamburger menu for mobile view -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <!-- Desktop Navigation Menu -->
        <nav class="hidden lg:flex space-x-4">
          <RouterLink
            to="/"
            :class="[
              'text-white hover:text-blue-300 px-4 py-2',
              route.path === '/' ? 'border-b-2 border-gray-300' : ''
            ]"
          >
            Beranda
          </RouterLink>
          <RouterLink
            to="/about"
            :class="[
              'text-white hover:text-blue-300 px-4 py-2',
              route.path === '/about' ? 'border-b-2 border-gray-300' : ''
            ]"
          >
            Tentang
          </RouterLink>
          <RouterLink
            to="/deposit"
            :class="[
              'text-white hover:text-blue-300 px-4 py-2',
              route.path === '/deposit' ? 'border-b-2 border-gray-300' : ''
            ]"
          >
            Menabung
          </RouterLink>
          <RouterLink
            to="/aktivitas"
            :class="[
              'text-white hover:text-blue-300 px-4 py-2',
              route.path === '/aktivitas' ? 'border-b-2 border-gray-300' : ''
            ]"
          >
            Aktivitas
          </RouterLink>

          <!-- Login and Register Buttons for desktop view -->
          <RouterLink
            to="/login"
            class="text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md"
          >
            Masuk
          </RouterLink>
          <RouterLink
            to="/daftar"
            class="text-white text-center bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md"
          >
            Daftar
          </RouterLink>
        </nav>
      </div>

      <!-- Mobile Dropdown Menu -->
      <nav v-if="isMenuOpen" class="lg:hidden mt-2 space-y-2 p-2 bg-blue-500 rounded-md">
        <RouterLink
          to="/"
          :class="[
            'block text-white hover:text-blue-300',
            route.path === '/' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Beranda
        </RouterLink>
        <RouterLink
          to="/about"
          :class="[
            'block text-white hover:text-blue-300',
            route.path === '/about' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Tentang
        </RouterLink>
        <RouterLink
          to="/deposit"
          :class="[
            'block text-white hover:text-blue-300',
            route.path === '/deposit' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Deposit
        </RouterLink>
        <RouterLink
          to="/aktivitas"
          :class="[
            'block text-white hover:text-blue-300',
            route.path === '/aktivitas' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Aktivitas
        </RouterLink>
        <RouterLink
          to="/login"
          class="block text-white bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md"
        >
          Masuk
        </RouterLink>
        <RouterLink
          to="/daftar"
          class="block text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md"
        >
          Daftar
        </RouterLink>
      </nav>
    </header>
  </div>

  <RouterView />
</template>

<style>
@keyframes opacity {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.autoAnim {
  animation: opacity 0.3s ease-in-out;
}
</style>
