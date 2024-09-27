<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import gambarSatu from '../assets/celengan.png'
import gambarDua from '../assets/celengan01.png'
</script>

<template>
  <div>
    <NavbarComponent />
  </div>

  <div class="flex flex-col md:flex-row items-center justify-center p-8 max-w-7xl mx-auto mt-10">
    <div class="flex-1 mb-6 md:mb-0">
      <img :src="gambarSatu" alt="Menabung" class="rounded-lg shadow-lg w-full h-auto" />
    </div>

    <div class="flex-1 md:ml-8">
      <h1 class="text-3xl font-bold mb-4">Tentang Menabung</h1>
      <p class="text-lg mb-4">
        Menabung adalah langkah penting dalam mengelola keuangan. Dengan menabung, kita dapat
        mempersiapkan masa depan yang lebih baik, baik untuk kebutuhan darurat maupun untuk tujuan
        jangka panjang seperti pendidikan, kesehatan, atau membeli rumah impian.
      </p>
      <p class="text-lg">
        Menjaga konsistensi dalam menabung akan membantu kita mencapai tujuan finansial dengan lebih
        mudah. Mari mulai menabung sekarang dan jadikan kebiasaan ini sebagai bagian dari gaya
        hidup!
      </p>
    </div>
  </div>

  <div class="flex flex-col md:flex-row items-center justify-center p-8 max-w-7xl mx-auto mt-20">
    <div class="flex-1 md:mr-8">
      <h1 class="text-3xl font-bold mb-4">Tentang Menabung</h1>
      <p class="text-lg mb-4">
        Menabung adalah langkah penting dalam mengelola keuangan. Dengan menabung, kita dapat
        mempersiapkan masa depan yang lebih baik, baik untuk kebutuhan darurat maupun untuk tujuan
        jangka panjang seperti pendidikan, kesehatan, atau membeli rumah impian.
      </p>
      <p class="text-lg">
        Aplikasi ini dibuat untuk membantu pengguna mengelola keuangan mereka dengan lebih baik
        melalui fitur pencatatan tabungan, pengelolaan anggaran, dan pelaporan keuangan yang mudah
        digunakan. Dengan aplikasi ini, pengguna dapat membuat rencana keuangan yang lebih jelas
        serta melacak pencapaian tabungan mereka.
      </p>
    </div>
    <div class="flex-1 mb-6 md:mb-0">
      <img :src="gambarDua" alt="Menabung" class="rounded-lg shadow-lg w-full h-auto" />
    </div>
  </div>
</template>
