<!-- src/views/TotalDeposits.vue -->
<template>
    <div class="min-h-screen bg-gray-100 p-4">
      <header class="bg-blue-600 text-white p-4">
        <h1 class="text-xl font-bold">Total Setoran</h1>
      </header>
  
      <div class="bg-white p-4 rounded-lg shadow mt-4">
        <h2 class="text-lg font-semibold">Detail Total Setoran</h2>
        <DataTable :items="depositData" />
      </div>
    </div>
  </template>
  
  <script>
  import DataTable from '../components/DataTable.vue';
  
  export default {
    name: 'TotalDeposits',
    components: {
      DataTable,
    },
    data() {
      return {
        depositData: [
          // Tambahkan data total setoran di sini
        ],
      };
    },
  }
  </script>
  
  <style scoped>
  /* Tambahan gaya jika diperlukan */
  </style>
  