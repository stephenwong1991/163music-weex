<template>
  <div class="wrapper">
    <Dashboard :style="contentStyle" />
  </div>
</template>

<script>
import { Utils } from 'weex-ui'
import Dashboard from './pages/dashboard/index.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.contentStyle = { height: tabPageHeight + 'px' }
  }
}
</script>

<style scoped>
</style>
