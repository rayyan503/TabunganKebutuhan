<!-- src/views/TotalBalance.vue -->
<template>
    <div class="min-h-screen bg-gray-100 p-4">
      <header class="bg-blue-600 text-white p-4">
        <h1 class="text-xl font-bold">Total Saldo</h1>
      </header>
  
      <div class="bg-white p-4 rounded-lg shadow mt-4">
        <h2 class="text-lg font-semibold">Detail Total Saldo</h2>
        <DataTable :items="balanceData" />
      </div>
    </div>
  </template>
  
  <script>
  import DataTable from '../components/TotalSaldoUser.vue';
  
  export default {
    name: 'TotalBalance',
    components: {
      DataTable,
    },
    data() {
      return {
        balanceData: [
          // Tambahkan data total saldo di sini
        ],
      };
    },
  }
  </script>
  
  <style scoped>
  /* Tambahan gaya jika diperlukan */
  </style>
  