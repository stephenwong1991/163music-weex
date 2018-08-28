<template>
  <div class="find-wrapper">
    <v-header></v-header>
    <wxc-tab-page ref="wxc-tab-page"
              :tab-titles="tabTitles"
              :tab-styles="tabStyles"
              @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
      <scroller class="find-scroller"
                v-for="(item, index) in tabList"
                :key="index"
                ref="scroll"
                :style="{ height: parseInt(contentStyle.height) - tabStyles.height + 'px' }">
        <div class="item-container">
          <div class="find-content-mask"></div>
          <v-banner :list="bannerList"></v-banner>
          <v-list :list="tabTitles[index].topbtn"></v-list>
          <div class="find-content">
            <v-song title="推荐歌单" :songList="personalized"></v-song>
            <!-- <v-song title="最新音乐" :songList="personalized"></v-song> -->
          </div>
        </div>
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
import VBanner from '@/components/find/banner.vue'
import VList from '@/components/find/list.vue'
import VSong from '@/components/find/song.vue'

export default {
  name: 'find',
  props: {
    contentStyle: {
      type: Object,
      default: () => ({
        height: Utils.env.getPageHeight() + 'px'
      })
    }
  },
  data: () => ({
    bannerList: Config.bannerList,
    topbtn: Config.topbtn,
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    personalized: Config.personalized // 推荐歌单
  }),
  components: {
    VHeader,
    VImage,
    VBanner,
    VList,
    VSong,
    WxcTabPage,
    WxcPanItem
  },
  created () {
    this.tabList = [...Array(this.tabTitles.length).keys()].map(i => [])
    this.init()
  },
  methods: {
    init () {
      this.getBanner()
      this.getPersonalized()
    },
    getBanner () {
      $http.banner().then(res => {
        this.bannerList = res.banners
      })
    },
    getPersonalized () {
      $http.personalized().then(res => {
        this.personalized = res.result
      })
    },
    wxcTabPageCurrentTabSelected (e) {
    },
    wxcPanItemPan (e) {
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs['wxc-tab-page'].bindExp(e.element)
      }
    }
  }
}

</script>

<style scoped>
  .find-wrapper {
    background-color: #db4137;
  }

  .find-scroller {
    background-color: #db4137;
    width: 750px;
  }

  .find-content-mask {
    width: 750px;
    height: 236px;
    background-color: #db4137;
  }

  .item-container {
    width: 750px;
    background-color: #FFFFFF;
  }

  .find-content {
    padding-left: 12px;
    padding-right: 12px;
  }
</style>
