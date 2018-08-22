<template>
  <div>
    <div class="header-wrapper">
      <v-image v-if="hasLeft" class="icon-left" :src="leftSrc" @click="leftIcon" />
      <text v-if="title" :class="['header-title', !hasLeft && 'header-title-margin']">{{ title }}</text>
      <div v-else class="search-wrapper" @click="search">
        <v-image class="icon-search" src="list/cm2_list_icn_search.png" />
        <text class="search">{{ placeholder }}</text>
      </div>
      <v-image class="icon-playing" src="topbar/cm2_topbar_icn_playing@2x.png" @click.native="playing" />
    </div>
  </div>
</template>

<script>
import VImage from './vImage.vue'
import { jumpIn } from '@/common/js/util.js'

export default {
  name: 'header',
  props: {
    hasLeft: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索音乐、视频、歌词、电台'
    },
    page: {
      type: String,
      default: 'find'
    }
  },
  components: {
    VImage
  },
  computed: {
    leftSrc () {
      return {
        find: 'topbar/cm2_topbar_icn_mic@2x.png',
        video: 'video/cm4_video_btn_post@2x.png'
      }[this.page]
    }
  },
  methods: {
    leftIcon () {

    },
    search () {

    },
    playing () {
      jumpIn({ url: '/pages/play/play' })
    }
  }
}
</script>

<style scoped>
  .header-wrapper {
    width: 750px;
    height: 120px; /* 多出来20px是为了给状态栏留出位置 */
    background-color: #dc4238;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }

  .header-title {
    width: 534px;
    text-align: center;
    color: #FFFFFF;
  }

  .header-title-margin {
    margin-left: 91px;
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

  .icon-search {
    width: 24px;
    height: 24px;
    margin-right: 15px;
  }

  .search-wrapper {
    width: 534px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #df645c;
    border-radius: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .search {
    font-size: 26px;
    color: #ffaca9;
    text-align: center;
  }
</style>
