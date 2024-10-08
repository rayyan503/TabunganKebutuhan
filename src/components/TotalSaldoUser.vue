<!-- src/components/TotalSaldoUser.vue -->
<template>
    <div>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">NIK</th>
            <th class="py-2 px-4 border-b">Nama</th>
            <th class="py-2 px-4 border-b">Email</th>
            <th class="py-2 px-4 border-b">Terakhir Menabung</th>
            <th class="py-2 px-4 border-b">Terakhir Penarikan</th>
            <th class="py-2 px-4 border-b">Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td class="py-2 px-4 border-b">{{ item.id }}</td>
            <td class="py-2 px-4 border-b">{{ item.name }}</td>
            <td class="py-2 px-4 border-b">{{ item.email }}</td>
            <td class="py-2 px-4 border-b">{{ item.registeredAt }}</td>
            <td class="py-2 px-4 border-b">{{ item.totalDeposits }}</td>
            <td class="py-2 px-4 border-b">{{ item.totalWithdrawals }}</td>
            <td class="py-2 px-4 border-b">{{ item.balance }}</td>
            <td class="py-2 px-4 border-b">{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TotalSaldoUser',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  /* Tambahan gaya jika diperlukan */
  </style>
  