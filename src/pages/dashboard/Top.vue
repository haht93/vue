<template>
  <div>
    <h3>Dashboard > Top Page</h3>
    <Header>
      <template v-slot:title>Top Page of Dashboard</template>
      Hé Lô
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'p-dashboard-top',
  components: {
    Header,
  },
}
</script>
