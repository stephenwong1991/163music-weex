<template>
  <div class="friend-wrapper">
    <div class="friend-header">
      <v-image class="icon-left" src="topbar/cm2_topbar_icn_invite@2x.png" @click="leftIcon" />
      <div class="friend-header-tab">
        <text v-for="(item, index) in tab" :key="index" :class="['tab-name', currentTab === index && 'tab-active']">{{ item.name }}</text>
      </div>
      <v-image class="icon-playing" src="topbar/cm2_topbar_icn_playing@2x.png" @click.native="playing" />
    </div>
  </div>
</template>

<script>
import VImage from '@/components/common/vImage.vue'

export default {
  name: 'friend',
  // props: {
  //   contentStyle: {
  //     type: Object,
  //     default: () => ({
  //       height: Utils.env.getPageHeight() + 'px'
  //     })
  //   }
  // },
  data: () => ({
    tab: [
      { name: '动态' },
      { name: '附近' }
    ],
    currentTab: 0
  }),
  components: {
    VImage
  },
  created () {
    this.init()
  },
  methods: {
    init () {
    },
    playing () {
    }
  }
}
</script>

<style scoped>
  .friend-header {
    width: 750px;
    height: 120px;
    background-color: #dc4238;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }

  .friend-header-tab {
    width: 240px;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 30px;
    flex-direction: row;
    justify-content: space-around;
  }

  .tab-name {
    width: 120px;
    line-height: 50px;
    font-size: 24px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 30px;
  }

  .tab-active {
    background-color: #FFFFFF;
    color: #dc4238;
  }

  .icon-left {
    width: 56px;
    height: 56px;
    margin-right: 35px;
  }

  .icon-playing {
    width: 56px;
    height: 56px;
    margin-left: 35px;
  }
</style>
