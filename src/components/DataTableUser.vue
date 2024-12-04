<template>
  <div>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">NIK</th>
          <th class="py-2 px-4 border-b">Username</th>
          <th class="py-2 px-4 border-b">Nama Lengkap</th>
          <th class="py-2 px-4 border-b">Email</th>
          <th class="py-2 px-4 border-b">Password</th>
          <th class="py-2 px-4 border-b">No.Telepon</th>
          <th class="py-2 px-4 border-b">Role</th>
          <th class="py-2 px-4 border-b">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.nik">
          <td class="py-2 px-4 border-b">{{ item.nik }}</td>
          <td class="py-2 px-4 border-b">{{ item.username }}</td>
          <td class="py-2 px-4 border-b">{{ item.full_name }}</td>
          <td class="py-2 px-4 border-b">{{ item.email }}</td>
          <td class="py-2 px-4 border-b">{{ item.password }}</td>
          <td class="py-2 px-4 border-b">{{ item.phone_number }}</td>
          <td class="py-2 px-4 border-b">{{ item.role }}</td>
          <td class="py-2 px-4 border-b">
            <!-- Icon delete untuk hapus user -->
            <button
              @click="deleteUser(item.nik)"
              class="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600"
            >
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'DataTableUser',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    // Method untuk hapus user
    async deleteUser(userId) {
      // Konfirmasi hapus menggunakan SweetAlert
      const result = await Swal.fire({
        title: 'Apakah kamu yakin?',
        text: 'User ini akan dihapus secara permanen!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
      })

      if (result.isConfirmed) {
        try {
          // Memanggil API DELETE untuk hapus user berdasarkan nik
          await axios.delete(`http://localhost:8080/user/delete`, {
            data: {
              nik: userId
            }
          })

          // Tampilkan pesan sukses
          Swal.fire('Terhapus!', 'User telah dihapus.', 'success')

          // Refresh data user setelah penghapusan
          this.$emit('userDeleted', userId)
        } catch (error) {
          // Tampilkan pesan error jika gagal menghapus
          Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus user.', 'error')
          console.error('Error deleting user:', error)
        }
      }
    }
  }
}
</script>
