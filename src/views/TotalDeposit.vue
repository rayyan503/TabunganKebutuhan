<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">Detail Tabungan</h1>
    </header>

    <div class="bg-white p-4 rounded-lg shadow mt-4">
      <button
        class="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 mb-5"
        @click="showSavingsForm"
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
import Swal from 'sweetalert2'

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
    },

    showSavingsForm() {
      Swal.fire({
        title: 'Formulir Menabung',
        html: `
          <div class="text-left space-y-4">
            <label for="fullName" class="block text-sm font-medium">Nama Lengkap</label>
            <input type="text" id="fullName" class="swal2-input" placeholder="Nama Lengkap" />

            <label for="address" class="block text-sm font-medium">Alamat</label>
            <input type="text" id="address" class="swal2-input" placeholder="Alamat" />

            <label for="nik" class="block text-sm font-medium">NIK</label>
            <input type="number" id="nik" class="swal2-input" placeholder="NIK" />

            <label for="purpose" class="block text-sm font-medium">Tujuan Menabung</label>
            <input type="text" id="goals" class="swal2-input" placeholder="Tujuan Menabung" />

            <label for="nominal" class="block text-sm font-medium">Nominal</label>
            <input type="number" id="nominal" class="swal2-input" placeholder="Masukkan nominal" />

            <label for="longTime" class="block text-sm font-medium">Lama Menabung</label>
            <input type="number" id="longTime" class="swal2-input w-full md:w-auto" placeholder="Masukkan jumlah" />

            <div class="flex flex-col md:flex-row gap-4">
              <select id="periodType" class="swal2-input w-full md:w-auto">
                <option value="daily">Hari</option>
                <option value="weekly">Minggu</option>
                <option value="monthly">Bulan</option>
              </select>
            </div>
          </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        customClass: {
          popup: 'rounded-lg p-8 max-w-md w-full',
          title: 'text-2xl font-bold',
          confirmButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded',
          cancelButton: 'bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded'
        },
        preConfirm: () => {
          const fullName = document.getElementById('fullName').value.trim()
          const address = document.getElementById('address').value.trim()
          const nik = document.getElementById('nik').value.trim()
          const purpose = document.getElementById('goals').value.trim()
          const nominal = parseFloat(document.getElementById('nominal').value.trim())
          const periodType = document.getElementById('periodType').value.trim()
          const longTime = parseInt(document.getElementById('longTime').value.trim())

          if (
            !fullName ||
            !address ||
            !nik ||
            !purpose ||
            isNaN(nominal) ||
            nominal <= 0 ||
            !periodType ||
            isNaN(longTime) ||
            longTime <= 0
          ) {
            Swal.showValidationMessage('Harap lengkapi semua kolom dengan benar')
            return false
          }

          return { fullName, address, nik, purpose, nominal, periodType, longTime }
        }
      }).then(async (result) => {
        if (result.isConfirmed) {
          const formData = {
            nik: result.value.nik,
            full_name: result.value.fullName,
            address: result.value.address,
            goals: result.value.purpose,
            target: result.value.nominal,
            unit: result.value.periodType,
            due: result.value.longTime
          }
          try {
            const response = await axios.post(
              'https://rest-api-go-production-add4.up.railway.app/deposit/create',
              formData,
              {
                headers: { 'Content-Type': 'application/json' }
              }
            )
            console.log('API Response:', response)

            Swal.fire('Tersimpan!', 'Pendaftaran Anda Sedang Diproses', 'success')
          } catch (error) {
            console.error('API Error:', error.response?.data || error)
            Swal.fire('Gagal!', 'Terjadi kesalahan saat menyimpan data', 'error')
          }
        }
      })
    }
  }
}
</script>
