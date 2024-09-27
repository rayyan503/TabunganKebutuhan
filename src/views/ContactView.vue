<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import { ref } from 'vue'

// Membuat state untuk form data
const name = ref('')
const email = ref('')
const message = ref('')

// Fungsi untuk menangani pengiriman form
const handleSubmit = () => {
  console.log('Nama:', name.value)
  console.log('Email:', email.value)
  console.log('Pesan:', message.value)
  alert('Form berhasil dikirim!')
  // Reset form
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <div>
    <!-- Navbar -->
    <NavbarComponent />

    <!-- Form Contact -->
    <div class="flex flex-col items-center justify-center p-8 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-center">Hubungi Kami</h1>
      <p class="text-lg mb-8 text-center">
        Jika Anda memiliki pertanyaan, butuh bantuan, atau memiliki masalah, silakan kirimkan pesan
        kepada kami melalui form di bawah ini.
      </p>

      <form
        @submit.prevent="handleSubmit"
        class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <!-- Input Nama -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Nama </label>
          <input
            v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>

        <!-- Input Email -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        <!-- Input Pesan -->
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
            Pesan Anda
          </label>
          <textarea
            v-model="message"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Masukkan pesan atau masalah Anda"
            required
          ></textarea>
        </div>

        <!-- Tombol Kirim -->
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
