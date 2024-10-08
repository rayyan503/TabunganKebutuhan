<!-- src/components/AddUserForm.vue -->
<template>
    <div class="bg-white p-4 rounded-lg shadow mt-4">
      <h3 class="text-lg font-semibold">Tambah Pengguna</h3>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block mb-1">Nama:</label>
          <input v-model="name" type="text" class="border rounded p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1">Email:</label>
          <input v-model="email" type="email" class="border rounded p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1">Tanggal Daftar:</label>
          <input v-model="registeredAt" type="date" class="border rounded p-2 w-full" required />
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Simpan</button>
        <button type="button" @click="$emit('close')" class="bg-gray-300 text-black py-2 px-4 rounded ml-2">Batal</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddUserForm',
    data() {
      return {
        name: '',
        email: '',
        registeredAt: '',
      };
    },
    methods: {
      submitForm() {
        const newUser = {
          id: Date.now(), // Gunakan timestamp sebagai ID sementara
          name: this.name,
          email: this.email,
          registeredAt: this.registeredAt,
          totalDeposits: 0, // Atur default sesuai kebutuhan
          totalWithdrawals: 0,
          balance: 0,
          status: 'Active',
        };
        this.$emit('user-added', newUser);
        this.resetForm();
        this.$emit('close'); // Tutup form setelah menambahkan pengguna
      },
      resetForm() {
        this.name = '';
        this.email = '';
        this.registeredAt = '';
      },
    },
  }
  </script>
  
  <style scoped>
  /* Tambahan gaya jika diperlukan */
  </style>
  