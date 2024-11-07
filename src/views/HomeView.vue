<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import CarouselComponent from '../components/CarouselComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import SliderComponent from '../components/SliderComponent.vue'
import gambarSatu from '../assets/images/undraw_personal_finance_re_ie6k.svg'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center h-screen">
    <div
      class="border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16 animate-spin"
    ></div>
  </div>

  <div v-else>
    <div class="viewAnim">
      <div class="autoAnim">
        <NavbarComponent />

        <CarouselComponent />
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div class="blockAnimRL">
          <p class="mx-auto max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
            Tabungan
            <span class="border-b border-dotted border-slate-300">Masyarakat</span>
          </p>

          <h1
            class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
          >
            <span class="inline-block"
              >Tabungan
              <span class="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  class="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                  ></path>
                </svg>
                <span class="relative">Terpercaya</span>
              </span>
            </span>
            <span class="inline-block">Masyarakat</span>
          </h1>
        </div>

        <div class="blockAnimLR">
          <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
            <span class="inline-block"
              >Mulai sekarang, mari wujudkan impianmu dengan menabung! Setiap langkah kecil membawa
              kita lebih dekat pada tujuan besar</span
            >
            <span class="inline-block">Ayo menabung.</span>
          </p>

          <div
            class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6"
          >
            <RouterLink
              to="/login"
              class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left duration-500 hover:scale-105 hover:shadow-xl"
            >
              <span>Ayo Mulai</span>
            </RouterLink>
          </div>
        </div>

        <!-- Tampilan About -->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <div
            class="mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center lg:pt-24 min-w-full lg:h-auto"
          >
            <!-- Responsive Grid Layout -->
            <div
              class="flex flex-col justify-center items-center gap-5 lg:flex-row lg:h-auto text-wrap"
            >
              <!-- Bagian 1: Gambar -->
              <div class="basis-1/2 blockAnimRL">
                <img
                  :src="gambarSatu"
                  class="slide duration-500 hover:scale-105 hover:shadow-xl max-w-full h-auto"
                  alt="About Image"
                />
              </div>

              <!-- Bagian 2: About Me -->
              <div class="basis-1/2 blockAnimLR">
                <h1
                  class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
                >
                  Tentang Kami
                </h1>
                <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                  Menabung adalah langkah cerdas untuk merencanakan masa depan yang lebih baik.
                  Dengan menabung, kita belajar mengelola keuangan, meraih tujuan jangka panjang,
                  dan memiliki dana cadangan saat menghadapi keadaan darurat. Tak peduli besar atau
                  kecil, setiap tabungan yang kita sisihkan hari ini akan bermanfaat di kemudian
                  hari. Menabung bukan hanya soal mengurangi pengeluaran, tapi juga soal membangun
                  kebiasaan baik yang akan membantu kita mencapai kemandirian finansial.
                </p>
                <div
                  class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6"
                >
                  <router-link
                    to="./about"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 duration-500 hover:scale-105 hover:shadow-xl"
                    >Selengkapnya</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <SliderComponent />

  <!-- Tampilan Footer -->
  <FooterComponent />
</template>

<style>
@keyframes sliding {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(4px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes appearLR {
  from {
    opacity: 0;
    transform: translateX(-150px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes appearRL {
  from {
    opacity: 0;
    transform: translateX(150px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.slide {
  animation: sliding infinite 1.5s ease-in-out;
}

.blockAnimLR {
  animation: appearLR linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

.blockAnimRL {
  animation: appearRL linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
</style>
