<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import gambarSatu from '../assets/celengan.png'
import gambarDua from '../assets/celengan01.png'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div>
    <div v-if="isLoading" class="flex justify-center items-center h-screen bg-gray-200">
      <div class="border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>

    <div v-else>
      <NavbarComponent />
      <div class="flex flex-col md:flex-row items-center justify-center p-8 max-w-7xl mx-auto mt-10">
        <!-- Gambar pertama dengan animasi menggunakan Tailwind CSS -->
        <div class="flex-1 mb-6 md:mb-0 animRL">
          <img :src="gambarSatu" alt="Menabung" class="rounded-lg shadow-lg w-full h-auto animate-bounce-slow" />
        </div>

        <div class="flex-1 md:ml-8 animLR">
          <h1 class="text-3xl font-bold mb-4">Tentang Menabung</h1>
          <p class="text-lg mb-4">
            Menabung adalah langkah penting dalam mengelola keuangan. Dengan menabung, kita dapat
            mempersiapkan masa depan yang lebih baik, baik untuk kebutuhan darurat maupun untuk
            tujuan jangka panjang seperti pendidikan, kesehatan, atau membeli rumah impian.
          </p>
          <p class="text-lg">
            Menjaga konsistensi dalam menabung akan membantu kita mencapai tujuan finansial dengan
            lebih mudah. Mari mulai menabung sekarang dan jadikan kebiasaan ini sebagai bagian dari
            gaya hidup!
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center p-8 max-w-7xl mx-auto" style="margin-top: 20vh">
        <div class="flex-1 md:mr-8 blockAnimLR">
          <h1 class="text-3xl font-bold mb-4">Tentang Menabung</h1>
          <p class="text-lg mb-4">
            Menabung adalah langkah penting dalam mengelola keuangan. Dengan menabung, kita dapat
            mempersiapkan masa depan yang lebih baik, baik untuk kebutuhan darurat maupun untuk
            tujuan jangka panjang seperti pendidikan, kesehatan, atau membeli rumah impian.
          </p>
          <p class="text-lg">
            Aplikasi ini dibuat untuk membantu pengguna mengelola keuangan mereka dengan lebih baik
            melalui fitur pencatatan tabungan, pengelolaan anggaran, dan pelaporan keuangan yang
            mudah digunakan. Dengan aplikasi ini, pengguna dapat membuat rencana keuangan yang lebih
            jelas serta melacak pencapaian tabungan mereka.
          </p>
        </div>

        <!-- Gambar kedua tanpa animasi -->
        <div class="flex-1 mb-6 md:mb-0 blockAnimRL">
          <img :src="gambarDua" alt="Menabung" class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>

      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
@keyframes opacityRL {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes opacityLR {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes scale {
  from {
    opacity: 0;
    transform: scale(0%);
  }
  to {
    opacity: 1;
    transform: scale(100%);
  }
}

.animS {
  animation: scale 0.3s ease-in-out;
}

.animLR {
  animation: opacityLR 0.3s ease-in-out;
}

.animRL {
  animation: opacityRL 0.3s ease-in-out;
}
</style>
