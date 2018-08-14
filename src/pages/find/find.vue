<template>
  <div class="find-wrapper">
    <v-header></v-header>
    <wxc-tab-page ref="wxc-tab-page"
              :tab-titles="tabTitles"
              :tab-styles="tabStyles"
              :tab-page-height="tabPageHeight"
              @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
      <scroller class="find-scroller"
                :style="{ height: parseInt(this.parentStyle.height) - 100 - this.tabStyles.height + 'px' }">
        <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
          <div class="find-content-mask"></div>
          <slider class="banner-wrapper" interval="3000" auto-play="true" scrollable="true">
            <div class="banner-item" v-for="(item, index) in bannerList" :key="index">
              <image class="banner-image" :src="item.picUrl"></image>
            </div>
          </slider>
        </div>
      </scroller>
    </wxc-tab-page>
      <!-- <div class="topbtn-wrapper">
        <div class="topbtn-item" v-for="(item, index) in topbtn" :key="index">
          <div class="topbtn-icon-wrapper">
            <v-image class="topbtn-icon" :src="item.icon"></v-image>
          </div>
          <text class="topbtn-text">{{ item.text }}</text>
        </div>
      </div> -->
  </div>
</template>

<script>
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui'
import Config from './config.js'
import { $http } from '../../common/js/api.js'
import VHeader from '../../components/common/header.vue'
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
    VImage,
    WxcTabPage,
    WxcPanItem
  },
  created () {
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

  .topbtn-wrapper {
    padding-left: 44px;
    padding-right: 44px;
    flex-direction: row;
    justify-content: space-between;
  }

  .topbtn-item {
    align-items: center;
  }

  .topbtn-icon-wrapper {
    width: 100px;
    height: 100px;
    background-color: #e14838;
    border-radius: 50px;
    margin-bottom: 14px;
    justify-content: center;
    align-items: center;
  }

  .topbtn-icon {
    width: 90px;
    height: 90px;
  }

  .topbtn-text {
    text-align: center;
  }

  .item-container {
    width: 750px;
    background-color: #FFFFFF;
  }

  .banner-wrapper {
    width: 726px;
    height: 282px;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -212px;
  }

  .banner-item {
    width: 726px;
    height: 282px;
    position: relative;
  }

  .banner-image {
    width: 726px;
    height: 282px;
  }
</style>
