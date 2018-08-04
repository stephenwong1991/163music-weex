<template>
  <div>
    <v-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <div class="item-container" :style="contentStyle"><text>发现</text></div>
      <div class="item-container" :style="contentStyle"><text>视频</text></div>
      <div class="item-container" :style="contentStyle"><text>我的</text></div>
      <div class="item-container" :style="contentStyle"><text>朋友</text></div>
      <div class="item-container" :style="contentStyle"><text>账号</text></div>
    </v-tab-bar>
  </div>
</template>

<script>
  import { Utils } from 'weex-ui'
  import VTabBar from '../../components/common/tabBar.vue'
  import CONST from '../../common/js/const.js'

  export default {
    data () {
      return {
        tabTitles: CONST.tabTitles,
        tabStyles: CONST.tabStyles
      }
    },
    components: {
      VTabBar
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
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
</style>
