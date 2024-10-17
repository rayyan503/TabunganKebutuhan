<!-- src/components/UserTable.vue -->
<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <h2 class="text-lg font-semibold mb-2">Daftar Pengguna</h2>
    <table class="min-w-full">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Nama</th>
          <th class="px-4 py-2">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="border px-4 py-2">{{ user.id }}</td>
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      users: [
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' }
        // Tambahkan data pengguna lainnya
      ]
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>
