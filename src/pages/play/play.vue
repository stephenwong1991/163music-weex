<template>
  <div class="play-wrapper">
    <v-image class="play-bg" :style="contentStyle" :src="defalutBg"></v-image>
    <div class="play-content-wrapper">
      <v-back :title="'title'" :desc="'desc'"></v-back>
      <div class="play-station">
        <v-image class="play-pointer" src="play/cm2_play_needle_play-ip6@2x.png"></v-image>
        <v-image class="play-program" src="play/cm2_default_cover_program-ip6@2x.png"></v-image>
      </div>
    </div>
  </div>
</template>

<script>
import { Utils } from 'weex-ui'
import VBack from '../../components/common/back.vue'
import VImage from '../../components/common/vImage.vue'

export default {
  data () {
    return {
      defalutBg: 'play/cm2_clock_bg@2x.png'
    }
  },
  components: {
    VBack,
    VImage
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.contentStyle = { height: tabPageHeight + 'px' }
  },
  methods: {

  }
}
</script>

<style scoped>
  .play-bg {
    width: 750px;
  }

  .play-content-wrapper {
    position: absolute;
    left: 0;
    top: 0;
  }

  .play-station {
    overflow: hidden;
    align-items: center;
  }

  .play-pointer {
    width: 222px;
    height: 366px;
    left: 315px;
    top: -60px;
  }

  .play-program {
    width: 468px;
    height: 468px;
  }
</style>
