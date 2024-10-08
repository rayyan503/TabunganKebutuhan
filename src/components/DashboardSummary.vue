<!-- src/components/DashboardSummary.vue -->
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Nama User Aktif</h3>
        <p class="text-2xl font-bold">{{ activeUsers }}</p>
        <button @click="toggleUsers" class="text-blue-600 mt-2">Show More</button>
        <DataTable v-if="showUsers" title="Nama" :items="userData" />
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Total Setoran</h3>
        <p class="text-2xl font-bold">{{ totalDeposits }}</p>
        <button @click="toggleDeposits" class="text-blue-600 mt-2">Show More</button>
        <DataTable v-if="showDeposits" title="Jumlah Setoran" :items="depositData" />
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Total Penarikan</h3>
        <p class="text-2xl font-bold">{{ totalWithdrawals }}</p>
        <button @click="toggleWithdrawals" class="text-blue-600 mt-2">Show More</button>
        <DataTable v-if="showWithdrawals" title="Jumlah Penarikan" :items="withdrawalData" />
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Total Saldo</h3>
        <p class="text-2xl font-bold">{{ totalBalance }}</p>
        <button @click="toggleBalance" class="text-blue-600 mt-2">Show More</button>
        <DataTable v-if="showBalance" title="Jumlah Saldo" :items="balanceData" />
      </div>
    </div>
  </template>
  
  <script>
  import DataTable from './DataTable.vue';
  
  export default {
    name: 'DashboardSummary',
    components: {
      DataTable,
    },
    props: {
      activeUsers: {
        type: Number,
        default: 0,
      },
      totalDeposits: {
        type: Number,
        default: 0,
      },
      totalWithdrawals: {
        type: Number,
        default: 0,
      },
      totalBalance: {
        type: Number,
        default: 0,
      },
      userData: {
        type: Array,
        default: () => [],
      },
      depositData: {
        type: Array,
        default: () => [],
      },
      withdrawalData: {
        type: Array,
        default: () => [],
      },
      balanceData: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        showUsers: false,
        showDeposits: false,
        showWithdrawals: false,
        showBalance: false,
      };
    },
    methods: {
      toggleUsers() {
        this.showUsers = !this.showUsers;
      },
      toggleDeposits() {
        this.showDeposits = !this.showDeposits;
      },
      toggleWithdrawals() {
        this.showWithdrawals = !this.showWithdrawals;
      },
      toggleBalance() {
        this.showBalance = !this.showBalance;
      },
    },
  }
  </script>
  
  <style scoped>
  /* Tambahan gaya jika diperlukan */
  </style>
  