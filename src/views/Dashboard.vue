<!-- src/views/Dashboard.vue -->
<template>
    <div class="min-h-screen bg-gray-100 p-4">
      <header class="bg-blue-600 text-white p-4">
        <h1 class="text-xl font-bold">Dashboard Admin</h1>
      </header>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-semibold">User Aktif</h2>
          <p class="text-xl font-bold">10</p>
          <router-link to="/active-users" class="text-blue-500">Show More</router-link>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-semibold">Total Setoran</h2>
          <p class="text-xl font-bold">Rp 50.000.000</p>
          <router-link to="/total-deposits" class="text-blue-500">Show More</router-link>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-semibold">Total Penarikan</h2>
          <p class="text-xl font-bold">Rp 20.000.000</p>
          <router-link to="/total-withdrawals" class="text-blue-500">Show More</router-link>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-semibold">Total Saldo</h2>
          <p class="text-xl font-bold">Rp 30.000.000</p>
          <router-link to="/total-balance" class="text-blue-500">Show More</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  }
  </script>
  
  <style scoped>
  /* Tambahan gaya jika diperlukan */
  </style>
  