<template>
  <div class="find-wrapper">
    <v-header></v-header>
    <wxc-tab-page ref="wxc-tab-page"
              :tab-titles="tabTitles"
              :tab-styles="tabStyles"
              :tab-page-height="tabPageHeight"
              @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
      <scroller class="find-scroller"
                v-for="(item, index) in tabList"
                :key="index"
                :style="{ height: parseInt(parentStyle.height) - 100 - tabStyles.height + 'px' }">
        <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
          <div class="find-content-mask"></div>
          <v-banner :list="bannerList"></v-banner>
          <v-list :list="tabTitles[index].topbtn"></v-list>
        </div>
      </scroller>
    </wxc-tab-page>
  </div>
</template>

<script>
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui'
import Config from './config.js'
import { $http } from '../../common/js/api.js'
import VHeader from '../../components/common/header.vue'
import VBanner from '../../components/find/banner.vue'
import VList from '../../components/find/list.vue'
import VImage from '../../components/common/vImage.vue'

export default {
  name: 'find',
  props: {
    parentStyle: {
      type: Object,
      default: () => ({
        height: Utils.env.getPageHeight() + 'px'
      })
    }
  },
  data: () => ({
    bannerList: [],
    topbtn: Config.topbtn,
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    tabPageHeight: 1334
  }),
  components: {
    VHeader,
    VBanner,
    VList,
    VImage,
    WxcTabPage,
    WxcPanItem
  },
  created () {
    this.tabList = [...Array(this.tabTitles.length).keys()].map(i => [])
    $http({
      url: '/banner'
    }).then(res => {
      this.bannerList = res.banners
    })
  },
  methods: {
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
</style>
