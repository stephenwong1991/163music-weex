<template>
  <div class="song-wrapper">
    <div>
      <text class="title">{{ title }} ></text>
      <div class="song-content">
        <div class="song-detail" v-for="(item, index) in songList" :key="index" v-if="index < 6">
          <v-image class="image" :src="item.picUrl"></v-image>
          <text class="desc">{{ item.name }}</text>
          <div class="play-count">
            <v-image class="play-count-icon" :src="'cover/cm4_cover_icn_music.png'"></v-image>
            <text class="play-count-text">{{ item.playCount | calcNum }}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VImage from '../common/vImage.vue'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    songList: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    VImage
  },
  filters: {
    calcNum (num) {
      let sgin = 10 * 10 * 10 * 10
      if (Number(num) > sgin) {
        return parseInt(Number(num) / sgin) + '万'
      }
      return num
    }
  }
}
</script>

<style scoped>
  .song-content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .title {
    font-size: 36px;
    font-weight: 500;
    line-height: 100px;
  }

  .song-detail {
    margin-bottom: 37px;
    position: relative;
  }

  .play-count {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #ffffff;
    flex-direction: row;
    align-items: center;
  }

  .play-count-icon {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  .play-count-text {
    font-size: 22px;
    color: #ffffff;
  }

  .image {
    width: 238px;
    height: 238px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 25px;
    width: 238px;
    padding-left: 4px;
    padding-right: 4px;
    line-height: 30px;
  }
</style>
