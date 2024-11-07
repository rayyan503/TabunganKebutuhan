<template>
    <h1
        class="mt-28 text-center mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl blockAnimRL">
        Berita Terbaru</h1>

    <!-- Tampilan slider -->
    <div class="relative md:block " @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
        <div class="overflow-hidden">
            <div class="flex transition-transform duration-500"
                :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }">
                <div v-for="(item, index) in items" :key="index"
                    class="min-w-full h-screen flex justify-center items-center">
                    <!-- Card Layout -->
                    <div
                        class="flex flex-col items-center md:flex-row md:max-w-7xl bg-slate-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg duration-300">
                        <img :src="item.image" :alt="item.title" class="w-full md:h-96 sm:h-48 object-cover">
                        <div class="p-4 flex flex-col justify-between leading-normal">
                            <h5
                                class="font-semibold mb-2 mx-auto max-w-4xl font-display text-5xl tracking-tight text-white sm:text-3xl">
                                {{ item.title }}</h5>
                            <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-200 sm:mt-6">{{
                                item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button @click="prevSlide"
            class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 duration-500 hover:scale-105 hover:shadow-xl">
            &#10094;
        </button>
        <button @click="nextSlide"
            class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 duration-500 hover:scale-105 hover:shadow-xl">
            &#10095;
        </button>
    </div>
</template>

<script>
import slide1 from '../assets/images/undraw_investment_re_rpk5.svg';
import slide2 from '../assets/images/undraw_online_banking_re_kwqh.svg';
import slide3 from '../assets/images/undraw_online_payments_re_y8f2.svg';

export default {
    name: 'SliderComponent',
    data() {
        return {
            currentIndex: 0,
            autoSlideInterval: null,
            items: [
                {
                    image: slide1,
                    title: 'Mata Uang',
                    description: 'Informasi terkait mata uang.',
                },
                {
                    image: slide2,
                    title: 'Uang',
                    description: 'Gadai.',
                },
                {
                    image: slide3,
                    title: 'Transfer',
                    description: 'Transaksi uang.',
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