<template>
  <div class="find-wrapper">
    <v-header page="video" placeholder="猜你喜欢 寂寞寂寞就好"></v-header>
    <wxc-tab-page ref="wxc-tab-page"
              :tab-titles="tabTitles"
              :tab-styles="tabStyles"
              @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
      <scroller v-for="(item, index) in tabList"
                :key="index"
                ref="scroll"
                :style="{ width: '750px', height: parseInt(contentStyle.height) - tabStyles.height + 'px' }">
        <list class="list" :style="{ height: parseInt(contentStyle.height) - tabStyles.height + 'px' }">
          <cell class="cell" v-for="(mv, index) in personalizedMVList" :key="index">
            <div class="panel">
              <v-image class="mv-pic" :src="mv.picUrl"></v-image>
            </div>
          </cell>
        </list>
      </scroller>
    </wxc-tab-page>
  </div>
</template>

<script>
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui'
import Config from './config.js'
import $http from '@/common/js/api.js'
import VHeader from '@/components/common/header.vue'
import VImage from '@/components/common/vImage.vue'

export default {
  name: 'video',
  props: {
    contentStyle: {
      type: Object,
      default: () => ({
        height: Utils.env.getPageHeight() + 'px'
      })
    }
  },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    personalizedMVList: []
  }),
  components: {
    VHeader,
    VImage,
    WxcTabPage,
    WxcPanItem
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.tabList = [...Array(this.tabTitles.length).keys()].map(i => [])
      this.personalizedMV()
    },
    wxcTabPageCurrentTabSelected (e) {
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs['wxc-tab-page'].bindExp(e.element)
      }
    },
    personalizedMV () {
      $http.personalizedMV().then(res => {
        this.personalizedMVList = res.result
      })
    }
  }
}
</script>

<style scoped>
  .panel {
    padding-left: 12px;
    padding-right: 12px;
  }

  .mv-pic {
    width: 728px;
    height: 408px;
    border-radius: 10px;
  }
</style>
