<!-- src/views/UserList.vue -->
<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-xl font-bold">Daftar Pengguna</h1>
    </header>

    <div class="bg-white p-4 rounded-lg shadow mt-4">
      <h2 class="text-lg font-semibold">Pengguna Aktif</h2>
      <button @click="showAddUserForm = true" class="bg-blue-500 text-white py-2 px-4 rounded mt-2">
        Tambah Pengguna
      </button>
      <DataTable :items="userData" />
      <AddUserForm v-if="showAddUserForm" @user-added="addUser" @close="showAddUserForm = false" />
    </div>
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
import AddUserForm from '../components/AddUserForm.vue'

export default {
  name: 'UserList',
  components: {
    DataTable,
    AddUserForm
  },
  data() {
    return {
      showAddUserForm: false,
      userData: [
        {
          id: 1,
          name: 'User A',
          email: 'userA@example.com',
          registeredAt: '2024-01-01',
          totalDeposits: 5000,
          totalWithdrawals: 1000,
          balance: 4000,
          status: 'Active'
        },
        {
          id: 2,
          name: 'User B',
          email: 'userB@example.com',
          registeredAt: '2024-02-01',
          totalDeposits: 7000,
          totalWithdrawals: 2000,
          balance: 5000,
          status: 'Active'
        }
        // Tambahkan data pengguna lainnya sesuai kebutuhan
      ]
    }
  },
  methods: {
    addUser(user) {
      this.userData.push(user)
    }
  }
}
</script>
