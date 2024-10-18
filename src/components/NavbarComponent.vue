<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import logoNav from '../assets/tabunganBersama.png'
import { useToast } from 'vue-toast-notification'
import router from '@/router'

const toast = useToast()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const route = useRoute()
const store = useStore()

const isLoggedIn = computed(() => store.state.user !== null)
const handleLogout = () => {
  store.commit('LOGOUT_SUCCESS')
  toast.success('Logout berhasil!')
  router.push('/')
}
</script>

<template>
  <div class="relative z-10">
    <header class="bg-teal-400 p-4 autoAnim fixed top-0 left-0 right-0 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo Section -->
        <div class="text-white text-lg font-semibold">
          <RouterLink to="/">
            <img :src="logoNav" class="w-60 h-auto pl-16 drop-shadow-2xl" />
          </RouterLink>
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
              'text-white hover:text-teal-200 px-4 py-2',
              route.path === '/' ? 'border-b-2 border-gray-300' : ''
            ]"
          >
            Beranda
          </RouterLink>
          <RouterLink
            to="/about"
            :class="[
              'text-white hover:text-teal-200 px-4 py-2',
              route.path === '/about' ? 'border-b-2 border-gray-300' : ''
            ]"
          >
            Tentang
          </RouterLink>
          <RouterLink
            to="/deposit"
            :class="[
              'text-white hover:text-teal-200 px-4 py-2',
              route.path === '/deposit' ? 'border-b-2 border-gray-300' : ''
            ]"
          >
            Menabung
          </RouterLink>

          <!-- Hanya tampilkan jika sudah login -->
          <RouterLink
            v-if="isLoggedIn"
            to="/aktivitas"
            :class="[
              'text-white hover:text-teal-200 px-4 py-2',
              route.path === '/aktivitas' ? 'border-b-2 border-gray-300' : ''
            ]"
          >
            Aktivitas
          </RouterLink>

          <!-- Tombol Login, Daftar, Logout -->
          <template v-if="isLoggedIn">
            <button
              @click="handleLogout"
              class="text-white text-center bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </template>
          <template v-else>
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
          </template>
        </nav>
      </div>

      <!-- Mobile Dropdown Menu -->
      <nav v-if="isMenuOpen" class="lg:hidden mt-2 space-y-2 p-2 bg-teal-400 rounded-md">
        <RouterLink
          to="/"
          :class="[
            'block text-white hover:text-teal-200',
            route.path === '/' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Beranda
        </RouterLink>
        <RouterLink
          to="/about"
          :class="[
            'block text-white hover:text-teal-200',
            route.path === '/about' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Tentang
        </RouterLink>
        <RouterLink
          to="/deposit"
          :class="[
            'block text-white hover:text-teal-200',
            route.path === '/deposit' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Deposit
        </RouterLink>
        <RouterLink
          v-if="isLoggedIn"
          to="/aktivitas"
          :class="[
            'block text-white hover:text-teal-200',
            route.path === '/aktivitas' ? 'border-b-2 border-gray-300' : ''
          ]"
        >
          Aktivitas
        </RouterLink>

        <template v-if="isLoggedIn">
          <button
            @click="handleLogout"
            class="block text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </template>
        <template v-else>
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
        </template>
      </nav>
    </header>
  </div>

  <RouterView />
</template>
