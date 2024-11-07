<template>
  <div id="app" class="flex">
    <Sidebar v-if="isSidebarVisibleRoute" />
    <div class="flex-grow">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()
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
}
</style>
