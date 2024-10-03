<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue'
import fotoAlam01 from '../assets/nabungfoto01.jpg'
import fotoAlam02 from '../assets/nabungfoto02.jpg'
import fotoAlam03 from '../assets/nabungfoto03.jpg'
import fotoAlam04 from '../assets/finance01.png'
import { computed, onMounted, ref } from 'vue'
import FooterComponent from '@/components/FooterComponent.vue'
import Swal from 'sweetalert2'
import ContactView from './ContactView.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

const amounts = ref([5000, 10000, 20000, 50000, 100000])
const nominals = ref([2000, 4000, 6000, 8000, 10000])
const uangs = ref([100000, 200000, 300000, 400000, 500000])
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
const weeks = ref([
  { label: '1 Minggu', days: 1 },
  { label: '2 Minggu', days: 2 },
  { label: '3 Minggu', days: 3 },
  { label: '4 Minggu', days: 4 },
  { label: '5 Minggu' , days: 5 },
  { label: '6 Minggu', days: 6 },
  { label: '7 Minggu', days: 7 },
  { label: '8 Minggu', days: 8 }
])

const months = ref([
  { label: '1 Bulan', days: 1 },
  { label: '2 Bulan', days: 2 },
  { label: '3 Bulan', days: 3 },
  { label: '4 Bulan', days: 4 },
  { label: '5 Bulan', days: 5 },
  { label: '6 Bulan', days: 6 },
  { label: '7 Bulan', days: 7 },
  { label: '8 Bulan', days: 8 }
]) 

const selectedAmount = ref(amounts.value[0])
const selectedPeriod = ref(periods.value[0])
const selectedNominal = ref(nominals.value[0])
const selectedUang = ref(uangs.value[0])
const selectedWeek = ref(weeks.value[0])
const selectedMonth = ref(months.value[0])

const totalSavings = computed(() => selectedAmount.value * selectedPeriod.value.days)
const totalDuit = computed(() => selectedNominal.value * selectedWeek.value.days)
const totalMonthDuit = computed(() => selectedUang.value * selectedMonth.value.days)

const showSavingsForm = () => {
  Swal.fire({
    title: 'Formulir Menabung',
    html: `
      <div class="text-left space-y-4">
        <label for="fullName" class="block text-sm font-medium">Nama Lengkap</label>
        <input type="text" id="fullName" class="swal2-input" placeholder="Nama Lengkap" />

        <label for="address" class="block text-sm font-medium">Alamat</label>
        <input type="text" id="address" class="swal2-input" placeholder="Alamat" />

        <label for="nik" class="block text-sm font-medium">NIK</label>
        <input type="number" id="nik" class="swal2-input" placeholder="NIK" />

        <label for="purpose" class="block text-sm font-medium">Tujuan Menabung</label>
        <input type="text" id="purpose" class="swal2-input" placeholder="Tujuan Menabung" />

         <label for="amount" class="block text-sm font-medium">Nominal</label>
        <input type="number" id="amount" class="swal2-input" placeholder="Masukkan nominal" />

        <label for="period" class="block text-sm font-medium">Lama Menabung (hari/minggu/bulan)</label>
        <input type="text" id="period" class="swal2-input" placeholder="Masukkan jumlah hari" />
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: 'Simpan',
    customClass: {
      popup: 'rounded-lg p-8 max-w-md w-full',
      title: 'text-2xl font-bold',
      confirmButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded',
      cancelButton: 'bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded'
    },
    preConfirm: () => {
      const fullName = (document.getElementById('fullName') as HTMLInputElement).value
      const address = (document.getElementById('address') as HTMLInputElement).value
      const nik = (document.getElementById('nik') as HTMLInputElement).value
      const purpose = (document.getElementById('purpose') as HTMLInputElement).value
      const amount = (document.getElementById('amount') as HTMLSelectElement).value
      const period = (document.getElementById('period') as HTMLSelectElement).value

      if (!fullName || !address || !nik || !purpose || !amount || !period) {
        Swal.showValidationMessage('Harap lengkapi semua kolom')
        return false
      }

      return { fullName, address, nik, purpose, amount, period }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('Form Data:', result.value)
      Swal.fire('Tersimpan!', 'Pendaftaran Anda Sedang Diproses', 'success')
    }
  })
}
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

      <div class="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center mt-32">
        <h2 class="text-3xl font-bold mb-4">Mari Menabung</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

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
              :onclick="showSavingsForm"
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

            <div class="col-span-1 flex items-center">
              <p class="text-lg font-semibold">Total: Rp. {{ totalSavings.toLocaleString() }}</p>
            </div>
          </div>

          <!-- next /weeks -->
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
            <div class="col-span-1">
              
              <select
                id="amount"
                v-model="selectedNominal"
                class="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
              >
                <option v-for="nominal in nominals" :key="nominal" :value="nominal">
                  Rp. {{ nominal.toLocaleString() }}
                </option>
              </select>
            </div>

            <!-- Dropdown for Periode weeks -->
            <div class="col-span-1">
              
              <select
                id="period"
                v-model= "selectedWeek"
                class="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
              >
                <option v-for="week in weeks" :key="week.label" :value="week">
                  {{ week.label }}
                </option>
              </select>
            </div>

            <!-- Total Nominal Weeks -->
            <div class="col-span-1 flex items-center">
              <p class="text-lg font-semibold">Total: Rp. {{ totalDuit.toLocaleString() }}</p>
            </div>
          </div>

          <!-- next /month -->
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
            <div class="col-span-1">
              
              <select
                id="uang"
                v-model="selectedUang"
                class="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
              >
                <option v-for="uang in uangs" :key="uang" :value="uang">
                  Rp. {{ uang.toLocaleString() }}
                </option>
              </select>
            </div>

            <!-- Dropdown for Periode month -->
            <div class="col-span-1">
              
              <select
                id="period"
                v-model= "selectedMonth"
                class="block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm"
              >
                <option v-for="month in months" :key="month.label" :value="month">
                  {{ month.label }}
                </option>
              </select>
            </div>

            <!-- Total Nominal month -->
            <div class="col-span-1 flex items-center">
              <p class="text-lg font-semibold">Total: Rp. {{ totalMonthDuit.toLocaleString() }}</p>
            </div>
          </div>


        </div>
      </div>
      <ContactView />
      <FooterComponent />
    </div>
  </div>
</template>
