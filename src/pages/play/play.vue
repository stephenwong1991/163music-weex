<template>
  <div class="play-wrapper">
    <v-image class="play-bg" :style="contentStyle" :src="defalutBg"></v-image>
    <v-image class="play-bg" :style="contentStyle" src="play/cm2_playbar_bg.png"></v-image>
    <v-image class="play-bg" :style="contentStyle" src="play/cm2_playbar_ready.png"></v-image>
    <div class="play-content-wrapper">
      <v-back :title="'title'" :desc="'desc'"></v-back>
      <div class="play-station">
        <v-image class="play-radio-bg" src="play/cm2_play_disc_radio_bg.png"></v-image>
        <div class="play-program-wrapper">
          <v-image class="play-program" src="default/cm2_default_cover_program.png"></v-image>
          <v-image class="play-program1" src="play/cm2_play_disc.png"></v-image>
          <v-image class="play-program2" src="play/cm2_play_disc@3x.png"></v-image>
          <!-- 转动的亮光 -->
          <v-image class="play-program3" src="play/cm2_playing_mask.png"></v-image>
        </div>
        <v-image class="play-pointer" src="play/cm2_play_needle_play-ip6@2x.png"></v-image>
      </div>
    </div>
  </div>
</template>

<script>
import { Utils } from 'weex-ui'
import Nat from 'natjs'
// import $http from '@/common/js/api.js'
import VBack from '@/components/common/back.vue'
import VImage from '@/components/common/vImage.vue'

export default {
  data: () => ({
    defalutBg: 'clock/cm2_clock_bg.png'
  }),
  components: {
    VBack,
    VImage
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    this.contentStyle = { height: tabPageHeight + 'px' }
    this.init()
  },
  methods: {
    init () {
      this.getMusic()
    },
    getMusic () {
      Nat.audio.play('http://cdn.instapp.io/nat/samples/audio.mp3', () => {
        let modal = weex.requireModule('modal')
        modal.toast({ message: 'play' })
      })
      // $http({
      //   url: '/music/url?id=33894312'
      // }).then(res => {
      //   Nat.audio.play(res.data[0].url, () => {
      //     let modal = weex.requireModule('modal')
      //     modal.toast({ message: 'play' })
      //   })
      // })
    }
  }
}
</script>

<style scoped>
  .play-bg {
    width: 750px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .play-content-wrapper {
    position: absolute;
    left: 0;
    top: 0;
  }

  .play-station {
    height: 800px;
    overflow: hidden;
    align-items: center;
  }

  .play-radio-bg {
    width: 574px;
    height: 574px;
    top: 85px;
  }

  .play-program-wrapper {
    width: 750px;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
  }

  .play-pointer {
    width: 222px;
    height: 366px;
    position: absolute;
    left: 315px;
    top: -60px;
  }

  .play-program {
    width: 490px;
    height: 490px;
    top: 128px;
  }

  .play-program1 {
    width: 404px;
    height: 404px;
    top: -320px;
  }

  .play-program2 {
    width: 574px;
    height: 574px;
    top: -810px;
  }

  .play-program3 {
    width: 560px;
    height: 280px;
    top: -1240px;
  }
</style>
