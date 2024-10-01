<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import fotoAlam01 from '../assets/nabungfoto01.jpg'
import fotoAlam02 from '../assets/nabungfoto02.jpg'
import fotoAlam03 from '../assets/nabungfoto03.jpg'
import fotoAlam04 from '../assets/finance01.png'
import { computed, onMounted, ref } from 'vue'
import FooterComponent from '@/components/FooterComponent.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

const amounts = ref([5000, 10000, 20000, 50000, 100000])
const periods = ref([
  { label: '3 Hari', days: 3 },
  { label: '5 Hari', days: 5 },
  { label: '7 Hari', days: 7 },
  { label: '10 Hari', days: 10 },
  { label: '1 Minggu', days: 7 },
  { label: '2 Minggu', days: 14 },
  { label: '5 Minggu', days: 35 },
  { label: '10 Minggu', days: 70 }
])

// User selections
const selectedAmount = ref(amounts.value[0])
const selectedPeriod = ref(periods.value[0])

// Calculate total
const totalSavings = computed(() => selectedAmount.value * selectedPeriod.value.days)
</script>

<template>
  <div>
    <div v-if="isLoading" class="flex justify-center items-center h-screen bg-gray-200">
      <div
        class="border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16 animate-spin"
      ></div>
    </div>

    <div v-else>
      <NavbarComponent />

      <div class="bg-green-200 min-h-96 flex justify-center items-center text-3xl font-bold">
        Banner Partai
      </div>

      <!-- Mari Menabung Section -->
      <div class="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center mt-32">
        <h2 class="text-3xl font-bold mb-4">Mari Menabung</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        <!-- Image Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="lg:col-span-1">
            <div class="aspect-w-16 aspect-h-9">
              <img :src="fotoAlam01" class="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          </div>

          <div class="lg:col-span-1 grid grid-rows-2 gap-6">
            <div class="h-64 bg-gray-400">
              <img :src="fotoAlam02" class="w-full h-full object-cover rounded-lg shadow-md" />
            </div>

            <div class="h-64 bg-gray-400">
              <img :src="fotoAlam03" class="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-32">
        <div
          class="flex flex-col md:flex-row items-center justify-center p-8 max-w-7xl mx-auto mt-10"
        >
          <div class="flex-1 mb-6 md:mb-0">
            <img :src="fotoAlam04" class="rounded-lg shadow-lg w-full h-auto animate-bounce-slow" />
          </div>

          <div class="flex-1 md:ml-8">
            <h2 class="text-2xl font-bold mb-4">Mulai Menabung</h2>
            <p class="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <button
              class="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600"
            >
              Ayo Menabung
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-32">
        <h2 class="text-2xl font-bold text-center mb-6">Saran Tabungan</h2>
        <div class="bg-gray-100 shadow-md rounded-lg p-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
            <!-- Dropdown for Amount -->
            <div class="col-span-1">
              <label for="amount" class="block text-sm font-medium text-gray-700"
                >Jumlah Tabungan</label
              >
              <select
                id="amount"
                v-model="selectedAmount"
                class="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
              >
                <option v-for="amount in amounts" :key="amount" :value="amount">
                  Rp. {{ amount.toLocaleString() }}
                </option>
              </select>
            </div>

            <!-- Dropdown for Period -->
            <div class="col-span-1">
              <label for="period" class="block text-sm font-medium text-gray-700">Periode</label>
              <select
                id="period"
                v-model="selectedPeriod"
                class="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
              >
                <option v-for="period in periods" :key="period.label" :value="period">
                  {{ period.label }}
                </option>
              </select>
            </div>

            <!-- Total Savings Display -->
            <div class="col-span-1 flex items-center">
              <p class="text-lg font-semibold">Total: Rp. {{ totalSavings.toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>
