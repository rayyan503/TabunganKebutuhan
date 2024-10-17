<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">User Aktif</h1>
    </header>

    <div class="bg-white p-4 rounded-lg shadow mt-4 max-w-screen-lg mx-auto">
      <h2 class="text-lg font-semibold mb-4">Daftar Pengguna Aktif</h2>
      <DataTable :items="activeUsers" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DataTable from '../components/DataTableUser.vue'

export default {
  name: 'ActiveUsers',
  components: {
    DataTable
  },
  data() {
    return {
      activeUsers: []
    }
  },
  mounted() {
    this.fetchActiveUsers()
  },
  methods: {
    async fetchActiveUsers() {
      try {
        const response = await axios.get(
          'https://rest-api-go-production-add4.up.railway.app/user/list'
        )
        this.activeUsers = response.data
      } catch (error) {
        console.error('Gagal mengambil data pengguna:', error)
      }
    }
  }
}
</script>
