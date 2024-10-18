<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import gambarSatu from '../assets/tabungUang.jpg'
import gambarDua from '../assets/setorUang.jpg'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div>
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <div
        class="border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16 animate-spin"
      ></div>
    </div>

    <div v-else>
      <NavbarComponent />
      <div
        class="mt-40 flex flex-col md:flex-row items-center justify-center p-8 max-w-7xl mx-auto"
      >
        <!-- Gambar pertama dengan animasi menggunakan Tailwind CSS -->
        <div class="flex-1 mb-6 md:mb-0 animRL">
          <img
            :src="gambarSatu"
            alt="Menabung"
            class="rounded-lg shadow-lg w-full h-auto animate-bounce-slow"
          />
        </div>

        <div class="flex-1 md:ml-8 animLR">
          <h1 class="text-3xl font-bold mb-4">Tentang Menabung</h1>
          <p class="text-lg mb-4">
            Selamat datang di Menabung Kebutuhan, platform yang dirancang khusus untuk membantu Anda
            memahami dan membangun kebiasaan menabung yang cerdas dan efektif. Kami percaya bahwa
            menabung bukan sekadar menyisihkan uang, tetapi tentang bagaimana kita merencanakan masa
            depan, mencapai tujuan keuangan, dan menciptakan kebebasan finansial yang kita inginkan.
          </p>
          <p class="text-lg">
            Misi kami adalah untuk menginspirasi Anda agar lebih bijak dalam mengelola keuangan,
            mempersiapkan dana darurat, meraih impian jangka panjang, dan membangun masa depan yang
            lebih aman dan stabil. Bersama kami, menabung bukan lagi sekadar keinginan, tetapi
            langkah nyata menuju kebebasan finansial. Mari mulai perjalanan finansial Anda bersama
            kami, karena menabung untuk masa depan yang lebih baik dimulai dari hari ini!
          </p>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row items-center gap-3 justify-center p-8 max-w-7xl mx-auto"
        style="margin-top: 20vh"
      >
        <div class="flex-1 md:mr-8 blockAnimLR">
          <h1 class="text-3xl font-bold mb-4">Tujuan Menabung</h1>
          <p class="text-lg mb-4">
            Di sini, kami menyediakan berbagai tips, panduan, dan strategi menabung yang dapat
            diterapkan oleh semua orang, mulai dari pelajar, pekerja, hingga para profesional yang
            ingin mengelola keuangan pribadi dengan lebih baik. Kami memahami bahwa setiap orang
            memiliki kebutuhan dan tujuan yang berbeda, itulah sebabnya kami hadir untuk memberikan
            solusi yang tepat dan mudah diterapkan.
          </p>
          <p class="text-lg">
            Aplikasi ini dibuat untuk membantu pengguna mengelola keuangan mereka dengan lebih baik
            melalui fitur pencatatan tabungan, pengelolaan anggaran, dan pelaporan keuangan yang
            mudah digunakan. Dengan aplikasi ini, pengguna dapat membuat rencana keuangan yang lebih
            jelas serta melacak pencapaian tabungan mereka.
          </p>
        </div>

        <!-- Gambar kedua tanpa animasi -->
        <div class="flex-1 mb-6 blockAnimRL">
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
