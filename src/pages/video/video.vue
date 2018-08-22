<template>
  <div class="find-wrapper">
    <v-header page="video" placeholder="猜你喜欢 寂寞寂寞就好"></v-header>
    <wxc-tab-page ref="wxc-tab-page"
              :tab-titles="tabTitles"
              :tab-styles="tabStyles"
              @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
    </wxc-tab-page>
  </div>
</template>

<script>
// import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui'
import { WxcTabPage, WxcPanItem } from 'weex-ui'
import Config from './config.js'
import VHeader from '@/components/common/header.vue'
import VImage from '@/components/common/vImage.vue'

export default {
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles
  }),
  components: {
    VHeader,
    VImage,
    WxcTabPage,
    WxcPanItem
  },
  methods: {
    wxcTabPageCurrentTabSelected (e) {
    }
  }
}
</script>

<style scoped>
</style>
