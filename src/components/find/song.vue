<template>
  <div class="song-wrapper">
    <div>
      <text class="title">{{ title }} ></text>
      <div class="song-content">
        <div class="song-detail" v-for="(item, index) in songList" :key="index" v-if="index < 6">
          <v-image class="image" :src="item.picUrl"></v-image>
          <text class="desc">{{ item.name }}</text>
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
