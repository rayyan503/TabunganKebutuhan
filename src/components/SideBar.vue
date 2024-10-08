<!-- src/components/Sidebar.vue -->
<template>
    <div class="w-64 h-screen bg-gray-800 text-white">
      <div class="p-4">
        <h2 class="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav class="mt-4">
        <router-link to="/dashboard" class="block p-4 hover:bg-gray-700">Dashboard</router-link>
        <router-link to="/active-users" class="block p-4 hover:bg-gray-700">User Aktif</router-link>
        <router-link to="/laporan" class="block p-4 hover:bg-gray-700">Laporan</router-link>
        <router-link to="/total-deposits" class="block p-4 hover:bg-gray-700">Setoran</router-link>
        <router-link to="/total-withdrawals" class="block p-4 hover:bg-gray-700">Total Penarikan</router-link>
        <router-link to="/total-balance" class="block p-4 hover:bg-gray-700">Total Saldo</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideBar',
  }
  </script>
  
  <style scoped>
  /* Tambahkan gaya untuk sidebar jika perlu */
  </style>
  