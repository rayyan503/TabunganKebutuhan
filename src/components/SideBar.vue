<template>
  <div class="flex">
    <div class="w-64 min-h-screen bg-gray-800 text-white flex-shrink-0">
      <div class="p-4">
        <h2 class="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav class="mt-4">
        <router-link to="/dashboard" class="block p-4 hover:bg-gray-700">Dashboard</router-link>
        <router-link to="/active-users" class="block p-4 hover:bg-gray-700">User Aktif</router-link>
        <router-link to="/laporan" class="block p-4 hover:bg-gray-700">Laporan</router-link>
        <router-link to="/total-deposits" class="block p-4 hover:bg-gray-700">Tabungan</router-link>
        <router-link to="/total-withdrawals" class="block p-4 hover:bg-gray-700"
          >Total Penarikan</router-link
        >
        <router-link to="/total-balance" class="block p-4 hover:bg-gray-700"
          >Total Saldo</router-link
        >
        <button
          @click="handleLogout"
          class="text-white text-center bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md ml-5 mt-5"
        >
          Logout
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'

export default {
  name: 'SideBar',
  setup() {
    const store = useStore()
    const router = useRouter()
    const toast = useToast()

    const handleLogout = () => {
      store.commit('LOGOUT_SUCCESS')
      toast.success('Logout berhasil!')
      router.push('/login')
    }

    return {
      handleLogout
    }
  }
}
</script>
