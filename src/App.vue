<!-- src/App.vue -->
<template>
  <div id="app" class="flex">
    <!-- Menampilkan sidebar hanya pada halaman dashboard -->
    <Sidebar v-if="isDashboardRoute" />
    <div class="flex-grow p-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';

// Mengambil rute saat ini
const route = useRoute();

// Menggunakan computed untuk menentukan apakah rute saat ini adalah dashboard
const isDashboardRoute = computed(() => {
  return route.path === '/dashboard';
});
</script>

<style>
.flex {
  display: flex; /* Menggunakan flexbox untuk layout */
}

.flex-grow {
  flex-grow: 1; /* Konten utama mengambil sisa ruang */
  padding: 16px; /* Memberikan padding pada konten utama */
}
</style>