<!-- src/views/ActiveUsers.vue -->
<template>
    <div>
        <SideBar />
        <div class="min-h-screen bg-gray-100 p-4">
            <header class="bg-blue-600 text-white p-4">
                <h1 class="text-xl font-bold">User Aktif</h1>
            </header>

            <div class="bg-white p-4 rounded-lg shadow mt-4">
                <h2 class="text-lg font-semibold">Daftar Pengguna Aktif</h2>
                <DataTable :items="activeUsers" />
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import DataTable from '../components/DataTableUser.vue';

export default {
    name: 'ActiveUsers',
    components: {
        DataTable,
    },
    data() {
        return {
            activeUsers: [
                { id: 1, name: 'User A', email: 'userA@example.com', registeredAt: '2024-01-01', totalDeposits: 5000, totalWithdrawals: 1000, balance: 4000, status: 'Active' },
                { id: 2, name: 'User B', email: 'userB@example.com', registeredAt: '2024-02-01', totalDeposits: 7000, totalWithdrawals: 2000, balance: 5000, status: 'Active' },
                // Tambahkan data pengguna aktif lainnya
            ],
        };
    },
}
</script>

<style scoped>
/* Tambahan gaya jika diperlukan */
</style>