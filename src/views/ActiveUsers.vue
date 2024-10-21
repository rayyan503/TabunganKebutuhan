<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <header class="bg-blue-600 text-white p-4 w-full">
      <h1 class="text-xl font-bold">User Aktif</h1>
    </header>

    <div class="bg-white p-4 rounded-lg shadow mt-4 w-full">
      <h2 class="text-lg font-semibold mb-4">Daftar Pengguna Aktif</h2>
      <button
        class="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 mb-5"
        @click="showSavingsForm"
      >
        Tambah Admin
      </button>
      <DataTable :items="activeUsers" @userDeleted="handleUserDeleted" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DataTable from '../components/DataTableUser.vue'
import Swal from 'sweetalert2'

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
    },

    handleUserDeleted(deletedUserId) {
      this.activeUsers = this.activeUsers.filter((user) => user.user_id !== deletedUserId)
    },

    showSavingsForm() {
      Swal.fire({
        title: 'Formulir Menabung',
        html: `
          <div class="text-left space-y-4">
            <label for="username" class="block text-sm font-medium">Username</label>
            <input type="text" id="username" class="swal2-input" placeholder="Masukkan Username" />

            <label for="fullName" class="block text-sm font-medium">Nama Lengkap</label>
            <input type="text" id="fullName" class="swal2-input" placeholder="Masukkan Nama Lengkap" />

            <label for="email" class="block text-sm font-medium">Email</label>
            <input type="email" id="email" class="swal2-input" placeholder="Masukkan Email" />

            <label for="password" class="block text-sm font-medium">Password</label>
            <input type="password" id="password" class="swal2-input" placeholder="Masukkan Password" />

            <label for="noPhone" class="block text-sm font-medium">No.Telepon</label>
            <input type="number" id="noPhone" class="swal2-input" placeholder="Masukkan No.Telepon" />

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
          const username = document.getElementById('username').value.trim()
          const fullName = document.getElementById('fullName').value.trim()
          const email = document.getElementById('email').value.trim()
          const password = document.getElementById('password').value.trim()
          const noPhone = document.getElementById('noPhone').value.trim()
          const role = 'admin'

          if (!username || !fullName || !email || !password || !noPhone || !role) {
            Swal.showValidationMessage('Harap lengkapi semua kolom dengan benar')
            return false
          }

          return { username, fullName, email, password, noPhone, role }
        }
      }).then(async (result) => {
        if (result.isConfirmed) {
          const formData = {
            email: result.value.email,
            full_name: result.value.fullName,
            username: result.value.username,
            password: result.value.password,
            phone_number: result.value.noPhone,
            role: result.value.role
          }
          try {
            const response = await axios.post(
              'https://rest-api-go-production-add4.up.railway.app/user/register',
              formData,
              {
                headers: { 'Content-Type': 'application/json' }
              }
            )
            console.log('API Response:', response)

            Swal.fire('Tersimpan!', 'Tambah Akun Admin diProses', 'success')
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
