<template>
  <v-tab-bar :tab-titles="tabTitles"
              :tab-styles="tabStyles"
              duration="0"
              @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <div class="item-container"
          v-for="(item, index) in tabTitles"
          :key="index">
      <component v-if="currentIndex === index"
                  :is="item.name"
                  :parentStyle="contentStyle">
      </component>
    </div>
  </v-tab-bar>
</template>

<script>
import { Utils } from 'weex-ui'
import CONST from '@/common/js/const.js'
import VTabBar from '@/components/common/tabBar.vue'
import VFind from '@/pages/find/find.vue'
import VVideo from '@/pages/video/video.vue'
import VFriend from '@/pages/friend/friend.vue'
import VAccount from '@/pages/account/account.vue'

export default {
  name: 'dashboard',
  /**
   * @param {Array}  tabTitles    底部导航栏
   * @param {Object} tabStyles    底部导航栏样式
   * @param {Number} currentIndex 当前索引
   */
  data: () => ({
    tabTitles: CONST.tabTitles,
    tabStyles: CONST.tabStyles,
    currentIndex: 0
  }),
  components: {
    VTabBar,
    VFind,
    VVideo,
    VFriend,
    VAccount
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const tabPageHeight = Utils.env.getPageHeight()
      const { tabStyles } = this
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' }
    },
    wxcTabBarCurrentTabSelected (e) {
      this.currentIndex = e.page
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
