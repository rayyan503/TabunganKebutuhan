<template>
  <div>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">NIK</th>
          <th class="py-2 px-4 border-b">Nama Lengkap</th>
          <th class="py-2 px-4 border-b">Alamat</th>
          <th class="py-2 px-4 border-b">Tujuan</th>
          <th class="py-2 px-4 border-b">Nominal</th>
          <th class="py-2 px-4 border-b">Lama Menabung</th>
          <th class="py-2 px-4 border-b">Periodik</th>
          <th class="py-2 px-4 border-b">Tanggal Menabung</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.nik">
          <td class="py-2 px-4 border-b">{{ item.nik }}</td>
          <td class="py-2 px-4 border-b">{{ item.full_name }}</td>
          <td class="py-2 px-4 border-b">{{ item.address }}</td>
          <td class="py-2 px-4 border-b">{{ item.goals }}</td>
          <td class="py-2 px-4 border-b">{{ item.target }}</td>
          <td class="py-2 px-4 border-b">{{ item.due }}</td>
          <td class="py-2 px-4 border-b">{{ item.unit }}</td>
          <td class="py-2 px-4 border-b">{{ formatCreatedAt(item.created_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export default {
  name: 'DataTable',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatCreatedAt(dateString) {
      return dayjs(dateString).format('DD MMMM YYYY')
    }
  }
}
</script>
