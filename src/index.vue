<template>
  <div class="wrapper">
    <Dashboard/>
  </div>
</template>

<script>
import { Utils } from 'weex-ui'
import Dashboard from './pages/dashboard/index.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style scoped>
</style>
