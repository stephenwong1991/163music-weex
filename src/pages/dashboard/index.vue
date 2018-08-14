<template>
  <v-tab-bar :tab-titles="tabTitles"
              :tab-styles="tabStyles"
              title-type="icon"
              duration="0"
              @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <div class="item-container" :style="contentStyle">
      <v-find :parentStyle="contentStyle"></v-find>
    </div>
    <div class="item-container" :style="contentStyle"><text>视频</text></div>
    <div class="item-container" :style="contentStyle"><text>我的</text></div>
    <div class="item-container" :style="contentStyle"><text>朋友</text></div>
    <div class="item-container" :style="contentStyle">
      <v-account :parentStyle="contentStyle"></v-account>
    </div>
  </v-tab-bar>
</template>

<script>
import { Utils } from 'weex-ui'
import VTabBar from '../../components/common/tabBar.vue'
import VFind from '../find/find.vue'
import VAccount from '../account/account.vue'
import CONST from '../../common/js/const.js'

export default {
  name: 'dashboard',
  data: () => ({
    tabTitles: CONST.tabTitles,
    tabStyles: CONST.tabStyles
  }),
  components: {
    VTabBar,
    VFind,
    VAccount
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' }
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page
      console.log(index)
    }
  }
}
</script>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #FFFFFF;
  }
</style>
