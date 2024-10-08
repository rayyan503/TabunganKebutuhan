<!-- src/components/UserForm.vue -->
<template>
    <div class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-lg font-semibold mb-2">Tambah Pengguna Baru</h2>
      <form @submit.prevent="addUser">
        <div class="mb-4">
          <label for="name" class="block mb-1">Nama</label>
          <input type="text" v-model="newUser.name" id="name" class="p-2 border border-gray-300 rounded" required />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-1">Email</label>
          <input type="email" v-model="newUser.email" id="email" class="p-2 border border-gray-300 rounded" required />
        </div>
        <button type="submit" class="bg-blue-600 text-white p-2 rounded">Tambah Pengguna</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUser: {
          name: '',
          email: '',
        },
      };
    },
    methods: {
      addUser() {
        this.$emit('user-added', { ...this.newUser, id: Date.now() });
        this.newUser.name = '';
        this.newUser.email = '';
      },
    },
  }
  </script>
  
  <style scoped>
  /* Gaya tambahan jika diperlukan */
  </style>
  