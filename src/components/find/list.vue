<template>
  <div class="topbtn-wrapper">
    <div class="topbtn-item" v-for="(item, index) in list" :key="index">
      <div class="topbtn-icon-wrapper">
        <v-image class="topbtn-icon" :src="item.icon"></v-image>
      </div>
      <text class="topbtn-text">{{ item.text }}</text>
    </div>
  </div>
</template>

<script>
import VImage from '../common/vImage.vue'

export default {
  props: {
    list: {
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
  .topbtn-wrapper {
    padding-top: 34px;
    padding-left: 44px;
    padding-right: 44px;
    padding-bottom: 36px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #e0e1e3;
    border-bottom-style: solid;
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
</style>
