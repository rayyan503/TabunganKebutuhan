<template>
  <footer class="bg-gray-800 text-white py-6">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
    >
      <!-- Section Kiri: Informasi Kontak (Email, Lokasi) -->
      <div class="text-center md:text-left mb-4 md:mb-0 scalingView">
        <p class="text-lg font-semibold">Menabung Kebutuhan</p>
        <p>
          Email:
          <a href="mailto:info@menabungkebutuhan.com" class="hover:underline"
            >info@menabungkebutuhan.com</a
          >
        </p>
        <p>Lokasi: Jakarta, Indonesia</p>
      </div>

      <!-- Section Tengah: Link Sosial Media dengan Font Awesome -->
      <div class="flex space-x-4 mb-4 md:mb-0 scalingView">
        <a href="#" class="text-white hover:text-blue-500">
          <font-awesome-icon :icon="['fab', 'facebook']" class="w-6 h-6" />
        </a>
        <a href="#" class="text-white hover:text-blue-500">
          <font-awesome-icon :icon="['fab', 'twitter']" class="w-6 h-6" />
        </a>
        <a href="#" class="text-white hover:text-blue-500">
          <font-awesome-icon :icon="['fab', 'instagram']" class="w-6 h-6" />
        </a>
      </div>

      <!-- Section Kanan: Links atau Navigasi -->
      <div class="text-center md:text-right scalingView">
        <a href="#" class="text-white hover:underline mx-2">Privacy Policy</a>
        <a href="#" class="text-white hover:underline mx-2">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes view {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.scalingView {
  animation: view;
  animation-timeline: view();
  animation-range: entry 0% cover 10%;
}
</style>