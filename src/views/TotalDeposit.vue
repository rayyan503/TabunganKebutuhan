<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">Detail Tabungan</h1>
    </header>

    <div class="bg-white p-4 rounded-lg shadow mt-4">
      <button
        class="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 mb-5"
      >
        Tambah Data
      </button>
      <div class="mb-4">
        <input
          v-model="searchQuery"
          @input="filterDeposits"
          type="text"
          placeholder="Cari Data..."
          class="px-4 py-2 border rounded-md w-full"
        />
      </div>
      <DataTable :items="filteredData" />
    </div>
  </div>
</template>
<script>
import DataTable from '../components/DataTable.vue'
import axios from 'axios'

export default {
  name: 'TotalDeposits',
  components: {
    DataTable
  },
  data() {
    return {
      depositData: [],
      searchQuery: '',
      filteredData: []
    }
  },
  mounted() {
    this.fetchDepositList()
  },
  methods: {
    async fetchDepositList() {
      try {
        const response = await axios.get(
          'https://rest-api-go-production-add4.up.railway.app/deposit/list'
        )
        this.depositData = response.data
        this.filteredData = response.data
        console.log('response', response)
      } catch (error) {
        console.error('Gagal mengambil data deposit:', error)
      }
    },

    filterDeposits() {
      const query = this.searchQuery.toLowerCase()
      this.filteredData = this.depositData.filter((item) => {
        const nik = item.nik.toString().toLowerCase()
        const fullName = item.full_name.toLowerCase()

        return nik.includes(query) || fullName.includes(query)
      })
    }
  }
}
</script>
