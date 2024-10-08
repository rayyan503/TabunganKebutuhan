<template>
    <div class="min-h-screen bg-gray-100 p-4">
      <header class="bg-blue-600 text-white p-4">
        <h1 class="text-xl font-bold">Laporan Periodik</h1>
      </header>
  
      <!-- Form untuk memilih periode laporan -->
      <div class="bg-white p-6 rounded-lg shadow mt-4">
        <h2 class="text-lg font-semibold mb-4">Pilih Periode Laporan</h2>
        
        <div class="flex items-center space-x-4 mb-4">
          <label>Dari:</label>
          <input type="date" v-model="startDate" class="border rounded p-2">
          
          <label>Sampai:</label>
          <input type="date" v-model="endDate" class="border rounded p-2">
          
          <button @click="generateReport" class="bg-blue-500 text-white p-2 rounded">Tampilkan</button>
        </div>
  
        <!-- Data laporan -->
        <div v-if="reportData.length" class="bg-gray-50 p-4 rounded-lg shadow">
          <h3 class="font-semibold text-lg mb-4">Laporan dari {{ startDate }} sampai {{ endDate }}</h3>
          
          <table class="min-w-full bg-white rounded-lg">
            <thead>
              <tr class="bg-gray-200">
                <th class="py-2 px-4">No</th>
                <th class="py-2 px-4">Deskripsi</th>
                <th class="py-2 px-4">Jumlah</th>
                <th class="py-2 px-4">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in reportData" :key="index">
                <td class="py-2 px-4">{{ index + 1 }}</td>
                <td class="py-2 px-4">{{ item.description }}</td>
                <td class="py-2 px-4">{{ item.amount }}</td>
                <td class="py-2 px-4">{{ item.date }}</td>
              </tr>
            </tbody>
          </table>
  
          <!-- Tombol cetak -->
          <button @click="printReport" class="bg-green-500 text-white p-2 rounded mt-4">Cetak Laporan</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startDate: '',
        endDate: '',
        reportData: [] // Data laporan yang ditampilkan sesuai periode
      };
    },
    methods: {
      generateReport() {
        // Contoh data laporan. Nantinya Anda bisa menggantinya dengan fetch data dari API
        this.reportData = [
          { description: 'Penjualan Produk A', amount: 'Rp 1.000.000', date: '2024-10-01' },
          { description: 'Penjualan Produk B', amount: 'Rp 500.000', date: '2024-10-03' }
        ];
      },
      printReport() {
        window.print(); // Memanggil fungsi cetak
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya jika diperlukan */
  </style>
  