<template>
  <div id="app" class="flex">
    <!-- Menampilkan sidebar pada halaman dashboard dan active-users -->
    <Sidebar v-if="isSidebarVisibleRoute" />
    <div class="flex-grow p-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

// Mengambil rute saat ini
const route = useRoute()

// Menggunakan computed untuk menentukan apakah sidebar harus ditampilkan
const isSidebarVisibleRoute = computed(() => {
  return (
    route.path === '/dashboard' ||
    route.path === '/active-users' ||
    route.path === '/total-deposits' ||
    route.path === '/total-withdrawals' ||
    route.path === '/total-balance' ||
    route.path === '/laporan'
  )
})
</script>

<style>
.flex {
  display: flex;
}

.flex-grow {
  flex-grow: 1;
  padding: 16px;
}
</style>
