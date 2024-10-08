<!-- src/views/TotalWithdrawals.vue -->
<template>
    <div class="min-h-screen bg-gray-100 p-4">
      <header class="bg-blue-600 text-white p-4">
        <h1 class="text-xl font-bold">Total Penarikan</h1>
      </header>
  
      <div class="bg-white p-4 rounded-lg shadow mt-4">
        <h2 class="text-lg font-semibold">Detail Total Penarikan</h2>
        <DataTable :items="withdrawalData" />
      </div>
    </div>
  </template>
  
  <script>
  import DataTable from '../components/DataTableTarik.vue';
  
  export default {
    name: 'TotalWithdrawals',
    components: {
      DataTable,
    },
    data() {
      return {
        withdrawalData: [
          // Tambahkan data total penarikan di sini
        ],
      };
    },
  }
  </script>
  
  <style scoped>
  /* Tambahan gaya jika diperlukan */
  </style>
  