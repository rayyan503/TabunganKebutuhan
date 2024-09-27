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
  <header class="bg-blue-500 p-4">
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
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          :class="[
            'text-white hover:text-blue-300 px-4 py-2',
            route.path === '/about' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          About
        </RouterLink>
        <RouterLink
          to="/contact"
          :class="[
            'text-white hover:text-blue-300 px-4 py-2',
            route.path === '/contact' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Contact Us
        </RouterLink>

        <!-- Login and Register Buttons for desktop view -->
        <RouterLink
          to="/login"
          class="text-white text-center bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md"
        >
          Login
        </RouterLink>
        <RouterLink
          to="/register"
          class="text-white text-center bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md"
        >
          Register
        </RouterLink>
      </nav>
    </div>

    <!-- Mobile Dropdown Menu -->
    <nav v-if="isMenuOpen" class="lg:hidden mt-2 space-y-2 p-2 bg-green-600 rounded-md">
      <RouterLink
        to="/"
        :class="[
          'block text-white hover:text-blue-300',
          route.path === '/' ? 'border-b-2 border-gray-300' : ''
        ]"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/about"
        :class="[
          'block text-white hover:text-blue-300',
          route.path === '/about' ? 'border-b-2 border-gray-300' : ''
        ]"
      >
        About
      </RouterLink>
      <RouterLink
        to="/contact"
        :class="[
          'block text-white hover:text-blue-300',
          route.path === '/contact' ? 'border-b-2 border-gray-300' : ''
        ]"
      >
        Contact Us
      </RouterLink>
      <RouterLink
        to="/login"
        class="block text-white bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md"
      >
        Login
      </RouterLink>
      <RouterLink
        to="/register"
        class="block text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md"
      >
        Register
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
