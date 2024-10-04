<script setup lang="ts">
import { ref } from 'vue'
import alamSatu from '../assets/loginPT0.jpg'

// Show/Hide password toggle
const showPassword = ref(false)
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100">
    <div class="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
      <!-- Left side (hidden on mobile) -->
      <div
        class="hidden md:flex w-full md:w-1/2 text-white font-black bg-green-500 p-8s rounded-t-lg md:rounded-t-none md:rounded-l-lg flex-col items-center justify-center"
        :style="{
          backgroundImage: `url(${alamSatu})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }"
      >
      <div class="backdrop-blur w-full text-center">
        <h2 className="text-3xl font-black mb-4 ">Menabung Kebutuhan</h2>
        <p className="text-xl mb-2">Kehidupan dan keluarga anda</p>
      </div>
      </div>

      <!-- Right side (login form) -->
      <div
        class="w-full md:w-1/2 p-8 rounded-b-lg md:rounded-b-none md:rounded-r-lg flex flex-col justify-center items-center md:items-start"
      >
        <h2 class="text-2xl font-bold">Masuk</h2>
        <p class="text-gray-600 mb-6 text-center md:text-left">
          Selamat datang! Silahkan masuk dengan akun yang terdaftar.
        </p>
        <form class="space-y-4 w-full">
          <!-- Email/Phone Input -->
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email/No.Handphone
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Contoh: johnwick@gmail.com"
              name="emailOrNoTelp"
            />
          </div>

          <!-- Password Input with Show/Hide -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Masukkan password"
              name="password"
            />
            <div
              class="absolute inset-y-0 right-3 top-4 flex items-center text-lg text-gray-400 cursor-pointer"
              @click="toggleShowPassword"
            >
              <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
            </div>
          </div>

          <!-- Forgot password -->
          <div class="text-right mb-4">
            <a href="/lupa" class="text-sm text-blue-500 hover:text-blue-700">Lupa password?</a>
          </div>

          <!-- Submit button -->
          <div class="mb-6">
            <button
              class="bg-blue-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg w-full"
              type="submit"
            >
              Masuk
            </button>
          </div>
        </form>

        <!-- Divider -->
        <div class="flex items-center justify-center my-4 w-full">
          <hr class="w-full border-gray-300 border-t-2" />
          <span class="px-2 text-gray-500">atau</span>
          <hr class="w-full border-gray-300 border-t-2" />
        </div>

        <!-- Google login button -->
        <div class="text-center mb-4 w-full">
          <button
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center w-full"
          >
            <font-awesome-icon icon="google" class="mr-2" /> Masuk dengan Google
          </button>
        </div>

        <!-- Registration link -->
        <p class="text-center text-gray-500 text-sm w-full">
          Belum punya akun?
          <a href="/daftar" class="text-purple-500 hover:text-purple-700">Daftar di sini</a>
        </p>
      </div>
    </div>
  </div>
</template>
