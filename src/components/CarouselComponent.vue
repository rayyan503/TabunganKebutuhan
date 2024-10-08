<template>
  <!-- Untuk tampilan seluler atau tablet -->
  <div class="relative block md:hidden" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
  <div class="overflow-hidden">
      <div class="flex transition-transform duration-500" :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)'}">
        <div v-for="(item, index) in items" :key="index" class="min-w-full h-screen flex justify-center items-center">
          <img :src="item.image" :alt="item.title" class="max-w-full h-auto object-cover duration-500 hover:scale-105 hover:shadow-xl">
        </div>
      </div>
    </div>
    <button @click="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 duration-500 hover:scale-105 hover:shadow-xl">
      &#10094;
    </button>
    <button @click="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 duration-500 hover:scale-105 hover:shadow-xl">
      &#10095;
    </button>
  </div>

  <!-- Untuk tampilan desktop -->
  <div class="relative hidden md:block" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
  <div class="overflow-hidden">
      <div class="flex transition-transform duration-500" :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)'}">
        <div v-for="(item, index) in items" :key="index" class="min-w-full h-screen flex justify-center items-center">
          <img :src="item.image" :alt="item.title" class="max-w-full h-full object-cover duration-500 hover:scale-105 hover:shadow-xl">
        </div>
      </div>
    </div>
    <button @click="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 duration-500 hover:scale-105 hover:shadow-xl">
      &#10094;
    </button>
    <button @click="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 duration-500 hover:scale-105 hover:shadow-xl">
      &#10095;
    </button>
  </div>
</template>

<script>
import slide1 from '../assets/simpanUang01.jpg';
import slide2 from '../assets/uangDompet.jpg';
import slide3 from '../assets/hitungUang.jpg';

export default {
  name: 'CarouselComponent',
  data() {
    return {
      currentIndex: 0,
      autoSlideInterval: null,
      items: [
        {
          image: slide1,
          title: 'simpan uang'
        },
        {
          image: slide2,
          title: 'uang di dompet'
        },
        {
          image: slide3,
          title: 'hitung uang'
        },
      ],
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.autoSlideInterval);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
};
</script>