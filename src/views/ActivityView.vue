<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import tujuan from '../assets/koinEmas.jpg'
import Swal from 'sweetalert2'
import SliderComponent from '../components/SliderComponent.vue'

const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
]

const selectedMonth = ref('Januari')
const saldo = 100000
const penarikan = ref(0)
const isLoading = ref(true)

const tarikSaldo = () => {
  Swal.fire({
    title: 'Form Pengambilan Uang Tabungan',
    html: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <input type="text" id="nama" class="swal2-input" placeholder="Masukan Nama Lengkap" />
        <input type="text" id="alamat" class="swal2-input" placeholder="Masukan Alamat " />
        <input type="text" id="nik" class="swal2-input" placeholder="Masukan NIK " />
        <input type="text" id="tujuan" class="swal2-input" placeholder="Tujuan tarik tunai" />
        <input type="number" id="nominal" class="swal2-input" placeholder="Nominal penarikan" min="0" max="${saldo}" />
      </div>
    `,
    confirmButtonText: 'Lanjutkan',
    cancelButtonText: 'Batal',
    showCancelButton: true,
    focusConfirm: false,
    preConfirm: () => {
      const nama = (document.getElementById('nama') as HTMLInputElement).value
      const alamat = (document.getElementById('alamat') as HTMLInputElement).value
      const nik = (document.getElementById('nik') as HTMLInputElement).value
      const tujuan = (document.getElementById('tujuan') as HTMLInputElement).value
      const nominal = (document.getElementById('nominal') as HTMLInputElement).value

      if (!nama || !alamat || !nik || !tujuan || !nominal) {
        Swal.showValidationMessage('Semua field harus diisi')
        return false
      }

      if (parseInt(nominal) > saldo) {
        Swal.showValidationMessage('Nominal penarikan melebihi saldo')
        return false
      }

      return { nama, alamat, nik, tujuan, nominal }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { nama, alamat, nik, tujuan, nominal } = result.value
      Swal.fire(
        'Berhasil',
        `Nama: ${nama}, Alamat: ${alamat}, NIK: ${nik}, Tujuan: ${tujuan}, Penarikan: Rp. ${parseInt(nominal).toLocaleString('id-ID')}`,
        'success'
      )
      penarikan.value = parseInt(nominal)
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
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
        <!-- Tabel Bulanan -->
        <div class="w-full max-w-3xl mx-auto mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-2">
            <span class="font-bold">Bulan</span>
            <span class="font-bold">Nominal</span>
            <span class="font-bold">Total</span>
          </div>

          <div class="flex justify-between items-center p-2 bg-white rounded-md shadow-md">
            <select v-model="selectedMonth" class="border rounded px-3 py-1">
              <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
            </select>
            <span>Rp. 100.000</span>
            <span>Rp. {{ saldo ? saldo.toLocaleString('id-ID') : '0' }}</span>
            <!-- Fallback jika saldo undefined -->
          </div>
        </div>

        <!-- Informasi Tabungan -->
        <div class="w-full max-w-3xl mx-auto p-4 bg-gray-200 rounded-lg shadow-md">
          <h2 class="font-bold text-center mb-4">Tabungan Saat Ini</h2>
          <div class="flex justify-between">
            <span>Saldo Saat ini</span>
            <span>Rp. {{ saldo ? saldo.toLocaleString('id-ID') : '0' }}</span>
            <!-- Fallback jika saldo undefined -->
          </div>
          <div class="flex justify-between">
            <span>Penarikan Saldo</span>
            <span>Rp. {{ penarikan ? penarikan.toLocaleString('id-ID') : '0' }}</span>
            <!-- Fallback jika penarikan undefined -->
          </div>
          <div class="flex justify-between">
            <span>Penambahan Saldo</span>
            <span>Rp. 100.000</span>
          </div>

          <!-- Tombol Tarik Saldo -->
          <button
            @click="tarikSaldo"
            class="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Tarik Saldo
          </button>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row items-center justify-center p-8 max-w-7xl mx-auto"
        style="margin-top: 20vh"
      >
        <div class="flex-1 md:mr-8 blockAnimLR">
          <h1 class="text-3xl font-bold mb-4">Tujuan Menabung</h1>
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
          <img :src="tujuan" alt="Menabung" class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>

      <SliderComponent />

      <FooterComponent />
    </div>
  </div>
</template>
