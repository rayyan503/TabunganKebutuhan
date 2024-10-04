<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100">
    <div class="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
      <!-- Left side (form) -->
      <div
        class="hidden md:flex w-full md:w-1/2 bg-green-500 font-black text-white p-8s rounded-t-lg md:rounded-t-none md:rounded-l-lg flex-col items-center justify-center"
        :style="{
          backgroundImage: `url(${alamDua})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }"
      >
      <div class="backdrop-blur w-full text-center">
          <h2 className="text-3xl font-black mb-4">Menabung Kebutuhan</h2>
          <p className="text-xl mb-2">Kehidupan dan keluarga anda</p>
        </div>
      </div>

      <!-- Right side (form) -->
      <div
        class="w-full md:w-1/2 p-8 rounded-b-lg md:rounded-b-none md:rounded-r-lg flex flex-col justify-center relative"
      >
        <button
          class="md:hidden absolute top-4 left-4 text-blue-500 mb-10"
          @click="navigateToLogin"
        >
          <font-awesome-icon icon="arrow-left" size="lg" />
        </button>
        <h2 class="text-2xl font-bold ml-3 mt-3">Daftar</h2>
        <p class="text-gray-600 mb-4 ml-3">Silakan anda daftar terlebih dahulu.</p>

        <form @submit.prevent="handleSubmit" class="px-4 space-y-4">
          <!-- Name Input -->
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Username</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              v-model="username"
              placeholder="Masukkan Username"
            />
          </div>

          <!-- Email Input -->
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              v-model="email"
              placeholder="Contoh: johnwick@gmail.com"
            />
          </div>

          <!-- Password Input with Show/Hide -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
              >Password</label
            >
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Masukkan password"
            />
            <div
              class="absolute inset-y-0 right-3 top-4 flex items-center text-lg mt-3 text-gray-400 cursor-pointer"
              @click="togglePasswordVisibility"
            >
              <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
            </div>
          </div>

          <!-- Confirm Password Input with Show/Hide -->
          <div class="relative">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password"
              >Konfirmasi Password</label
            >
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              placeholder="Masukkan kembali password"
            />
            <div
              class="absolute inset-y-0 right-3 top-4 flex items-center text-lg mt-3 text-gray-400 cursor-pointer"
              @click="toggleConfirmPasswordVisibility"
            >
              <font-awesome-icon :icon="showConfirmPassword ? 'eye' : 'eye-slash'" />
            </div>
          </div>

          <div class="flex items-center justify-between mb-6">
            <button
              class="bg-blue-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg w-full"
              type="submit"
            >
              Daftar
            </button>
          </div>
        </form>

        <p class="text-center text-gray-500 text-sm mt-3">
          Sudah punya akun?
          <a href="/login" class="text-purple-500 hover:text-purple-700">Masuk di sini</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import alamDua from '../assets/loginPT1.jpg'
import { useToast } from 'vue-toast-notification'
const toast = useToast()

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const store = useStore()
const router = useRouter()

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const navigateToLogin = () => {
  router.push('/login')
}

const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Z]).{8,}$/
  return passwordRegex.test(password)
}

const handleSubmit = async () => {
  if (!username.value || !email.value || !password.value || !confirmPassword.value) {
    toast.warning('Semua kolom harus diisi!')
    return
  }

  if (password.value !== confirmPassword.value) {
    toast.warning('Password dan Konfirmasi Password tidak sama!')
    return
  }

  if (!validatePassword(password.value)) {
    toast.warning('Password harus diawali dengan huruf kapital dan minimal 8 karakter!')
    return
  }

  try {
    const userData = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    const response = await store.dispatch('register', userData)
    toast.success('Registrasi berhasil!', response)
    router.push('/login')
  } catch (error) {
    toast.error('Registrasi gagal! ')
    console.error('Error:', error)
  }
}
</script>
