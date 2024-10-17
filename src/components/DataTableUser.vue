<!-- src/components/DataTableUset.vue -->
<template>
  <div>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">User ID</th>
          <th class="py-2 px-4 border-b">Username</th>
          <th class="py-2 px-4 border-b">Nama Lengkap</th>
          <th class="py-2 px-4 border-b">Email</th>
          <th class="py-2 px-4 border-b">Password</th>
          <th class="py-2 px-4 border-b">No.Telepon</th>
          <th class="py-2 px-4 border-b">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.user_id">
          <td class="py-2 px-4 border-b">{{ item.user_id }}</td>
          <td class="py-2 px-4 border-b">{{ item.username }}</td>
          <td class="py-2 px-4 border-b">{{ item.full_name }}</td>
          <td class="py-2 px-4 border-b">{{ item.email }}</td>
          <td class="py-2 px-4 border-b">{{ item.password }}</td>
          <td class="py-2 px-4 border-b">{{ item.phone_number }}</td>
          <td class="py-2 px-4 border-b">{{ item.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataTableUser',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
