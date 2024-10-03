<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import { onMounted, ref } from 'vue'

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
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center justify-center p-8 max-w-7xl mx-auto">
      <div class="flex-1 mb-2 md:mb-0">
        <form @submit.prevent="handleSubmit" class="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <!-- Input Nama -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Nama </label>
            <input v-model="name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="Masukkan nama Anda" required />
          </div>

          <!-- Input Email -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
            <input v-model="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" placeholder="Masukkan email Anda" required />
          </div>

          <!-- Input Pesan -->
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
              Pesan Anda
            </label>
            <textarea v-model="message"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message" rows="5" placeholder="Masukkan pesan atau masalah Anda" required></textarea>
          </div>

          <!-- Tombol Kirim -->
          <div class="flex items-center justify-between">
            <button type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>

      <div class="flex-1 md:ml-8">
        <h2 class="text-3xl font-bold">Hubungi Kami</h2>
        <p class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>

</template>
