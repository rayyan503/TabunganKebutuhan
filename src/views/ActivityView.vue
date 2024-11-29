<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'

import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'
import gambarDua from '../assets/images/undraw_transfer_money_re_6o1h.svg'

// State variables
const isLoading = ref(true)
const transactionHistory = ref<{ date: string; nominal: number; total: number; note: string }[]>([])
const saldo = ref(100000)
const tarik = ref(0)
onMounted(() => {
  // Simulating a loading delay
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

// Function for saving money
const menabung = async () => {
  const { value: formValues } = await Swal.fire({
    title: 'Menabung',
    html:
      '<label for="tanggal" class="block mb-2">Tanggal</label>' +
      '<input id="tanggal" type="date" class="swal2-input">' +
      '<label for="nominal" class="block mb-2">Nominal</label>' +
      '<input id="nominal" type="number" class="swal2-input" placeholder="Masukkan nominal">',
    focusConfirm: false,
    preConfirm: () => {
      const tanggal = (document.getElementById('tanggal') as HTMLInputElement).value
      const nominal = parseInt((document.getElementById('nominal') as HTMLInputElement).value, 10)
      return { tanggal, nominal }
    }
  })

  if (formValues && formValues.tanggal && formValues.nominal > 0) {
    saldo.value += formValues.nominal
    transactionHistory.value.push({
      date: formValues.tanggal,
      nominal: formValues.nominal,
      total: saldo.value,
      note: 'Menabung'
    })
    Swal.fire('Berhasil!', 'Tabungan berhasil ditambahkan.', 'success')
  }
}

// Function for withdrawing money
const menarikSaldo = async () => {
  const { value: formValues } = await Swal.fire({
    title: 'Tarik Saldo',
    html:
      '<label for="tanggal" class="block mb-2">Tanggal</label>' +
      '<input id="tanggal" type="date" class="swal2-input">' +
      '<label for="nominal" class="block mb-2">Nominal</label>' +
      '<input id="nominal" type="number" class="swal2-input" placeholder="Masukkan nominal">',
    focusConfirm: false,
    preConfirm: () => {
      const tanggal = (document.getElementById('tanggal') as HTMLInputElement).value
      const nominal = parseInt((document.getElementById('nominal') as HTMLInputElement).value, 10)
      return { tanggal, nominal }
    }
  })

  if (formValues && formValues.tanggal && formValues.nominal > 0) {
    if (formValues.nominal <= saldo.value) {
      saldo.value -= formValues.nominal
      transactionHistory.value.push({
        date: formValues.tanggal,
        nominal: -formValues.nominal,
        total: saldo.value,
        note: 'Penarikan'
      })
      Swal.fire('Berhasil!', 'Saldo berhasil ditarik.', 'success')
    } else {
      Swal.fire('Gagal!', 'Saldo tidak mencukupi.', 'error')
    }
  }
}
</script>

<template>
  <div>
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <div
        class="border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16 animate-spin"
      ></div>
    </div>

    <!-- Content -->
    <div v-else>
      <NavbarComponent />

      <div class="max-w-7xl mx-auto p-4 bg-gray-50 mt-32">
        <!-- Transaction History Table -->
        <div class="w-full max-w-3xl mx-auto mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h1 class="text-center mb-5 text-xl font-bold">Riwayat Transaksi</h1>
          <div class="flex justify-between items-center mb-2 font-bold">
            <span>Tanggal</span>
            <span>Nominal</span>
            <span>Total</span>
            <span>Catatan</span>
          </div>

          <div
            v-for="(transaction, index) in transactionHistory"
            :key="index"
            class="flex justify-between items-center p-2 bg-white rounded-md shadow-sm mb-2"
          >
            <span>{{ transaction.date }}</span>
            <span>Rp. {{ transaction.nominal.toLocaleString('id-ID') }}</span>
            <span>Rp. {{ transaction.total.toLocaleString('id-ID') }}</span>
            <span>{{ transaction.note }}</span>
          </div>
        </div>

        <!-- Savings Information -->
        <div class="w-full max-w-3xl mx-auto p-4 bg-gray-200 rounded-lg shadow-md">
          <h2 class="font-bold text-center mb-4 text-lg">Tabungan Saat Ini</h2>
          <div class="flex justify-between mb-4">
            <span>Saldo Saat Ini:</span>
            <span>Rp. {{ saldo.toLocaleString('id-ID') }}</span>
          </div>
          <div class="flex justify-between mb-4">
            <span>Penarikan Saldo:</span>
            <span>Rp. {{ tarik.toLocaleString('id-ID') }}</span>
          </div>

          <!-- Buttons -->
          <button
            @click="menabung"
            class="mt-4 w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
          >
            Menabung
          </button>
          <button
            @click="menarikSaldo"
            class="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Tarik Saldo
          </button>
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

        <div class="flex-1 mb-6 blockAnimRL">
          <img :src="gambarDua" alt="Menabung" class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>

      <SliderComponent />
      <FooterComponent />
    </div>
  </div>
</template>
