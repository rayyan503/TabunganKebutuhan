<template>
    <h1 class="mt-28 text-center mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">Berita Terbaru</h1>
    
    <!-- Tampilan slider -->
    <div class="relative md:block " @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
        <div class="overflow-hidden">
            <div class="flex transition-transform duration-500"
            :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }">
                <div v-for="(item, index) in items" :key="index" class="min-w-full h-screen flex justify-center items-center">
                    <!-- Card Layout -->
                    <div
                        class="flex flex-col items-center md:flex-row md:max-w-7xl bg-slate-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img :src="item.image" :alt="item.title" class="w-full md:h-96 sm:h-48 object-cover">
                        <div class="p-4 flex flex-col justify-between leading-normal">
                            <h5 class="font-semibold mb-2 mx-auto max-w-4xl font-display text-5xl tracking-tight text-white sm:text-3xl">{{ item.title }}</h5>
                            <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-200 sm:mt-6">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import slide1 from '../assets/celengan.png';
import slide2 from '../assets/celengan01.png';
import slide3 from '../assets/transfer.png';

export default {
    name: 'SliderComponent',
    data() {
        return {
            currentIndex: 0,
            autoSlideInterval: null,
            items: [
                {
                    image: slide1,
                    title: 'Celengan 1',
                    description: 'Deskripsi untuk gambar pertama.',
                },
                {
                    image: slide2,
                    title: 'Celengan 2',
                    description: 'Deskripsi untuk gambar kedua.',
                },
                {
                    image: slide3,
                    title: 'Transfer',
                    description: 'Deskripsi untuk gambar ketiga.',
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